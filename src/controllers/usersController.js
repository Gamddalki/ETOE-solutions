import User from "../models/User";
import Video from "../models/Video";
import fetch from "node-fetch";
import bcrypt from "bcrypt";

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const joinPost = async (req, res) => {
  const { username, password, password2, name, email, location } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match.",
    });
  }
  const userExists = await User.exists({ $or: [{ username }, { email }] });
  if (userExists) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      username,
      password,
      name,
      email,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: error._message,
    });
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const loginPost = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username, socialOnly: false });
  if (!exists) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "This username doesn't exist.",
    });
  }
  const okay = await bcrypt.compare(password, exists.password);
  if (!okay) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = exists;
  return res.redirect("/");
};

export const githubLoginStart = (req, res) => {
  const baseUrl = "http://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const githubLoginFinish = async (req, res) => {
  const baseUrl = "http://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      return res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      user = await User.create({
        username: userData.login,
        password: "",
        name: userData.name ? userData.name : userData.login,
        email: emailObj.email,
        socialOnly: true,
        avatarUrl: userData.avatar_url,
        location: userData.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const see = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("videos");
  if (!user) {
    return res.status(404).render("404", { pageTitle: "User not found" });
  }
  return res.render("users/profile", { pageTitle: user.name, user });
};

export const edit = (req, res) => {
  return res.render("users/edit-profile", { pageTitle: "Edit Profile" });
};

export const editPost = async (req, res) => {
  const {
    session: {
      user: { _id, username: sessionUsername, email: sessionEmail, avatarUrl },
    },
    body: { username, name, email, location },
    file,
  } = req;
  let searchParam = [];
  if (sessionEmail !== email) {
    searchParam.push({ email });
  }
  if (sessionUsername !== username) {
    searchParam.push({ username });
  }
  if (searchParam.length > 0) {
    const findUser = await User.findOne({ $or: searchParam });
    if (findUser && findUser._id.toString() !== _id) {
      return res.status(400).render("users/edit-profile", {
        pageTitle: "Edit Profile",
        errorMessage: "This username/email is already taken.",
      });
    }
  }
  const updatedUser = await User.findByIdAndUpdate(
    _id,
    {
      username,
      avatarUrl: file ? file.path : avatarUrl,
      name,
      email,
      location,
    },
    { new: true }
  );
  req.session.user = updatedUser;
  return res.render("users/edit-profile", { pageTitle: "Edit Profile" });
};

export const changePassword = (req, res) => {
  if (req.session.user.socialOnly === true) {
    return res.redirect("/:id(\\d+)");
  }
  return res.render("users/change-password", { pageTitle: "Change Password" });
};

export const changePasswordPost = async (req, res) => {
  const {
    session: {
      user: { _id, password },
    },
    body: { oldPassword, newPassword, newPassword2 },
  } = req;
  const user = await User.findById(_id);
  const okay = await bcrypt.compare(oldPassword, user.password);
  if (!okay) {
    return res.status(400).render("users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "The password is wrong.",
    });
  }
  if (newPassword !== newPassword2) {
    return res.status(400).render("users/change-password", {
      pageTitle: "Change Password",
      errorMessage: "Password confirmation does not match.",
    });
  }
  user.password = newPassword;
  await user.save();
  return res.redirect("/users/edit");
};

export const leave = (req, res) => res.send("Users Delete");

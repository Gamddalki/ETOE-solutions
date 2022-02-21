import "dotenv/config";

import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 8421;

const handlelistening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😆`);

app.listen(PORT, handlelistening);

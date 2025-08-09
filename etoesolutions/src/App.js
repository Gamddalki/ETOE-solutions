import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import Contact from "./Routes/Contact";
import Recruit from "./Routes/Recruit";
import Etoe from "./Routes/Etoe/Etoe";
import Solution from "./Routes/Solution/Solution";
import Consulting from "./Routes/Solution/Consulting";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/etoe" element={<Etoe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recruit" element={<Recruit />} />
            <Route path="/solutions" element={<Solution />} />
            <Route path="/solutions/consulting" element={<Consulting />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

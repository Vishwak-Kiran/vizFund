import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import JsonData from "./components/data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import DonateMain from "./components/Donate/donatemain";
import Home from "./components/Home/home";
import ScrollToTop from "./components/scrolltotop";
import DonateFood from "./components/DonateFood/donateFood";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const NotFoundPage = () => {
  return (
    <div style={{ padding: 100 }}>
      <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={Home()}></Route>
          <Route path="/donate" element={<DonateMain />}></Route>
          <Route path="/donateFood" element={<DonateFood />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

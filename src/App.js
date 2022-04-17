import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import JsonData from "./components/data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DonateMain from "./components/Donate/donatemain";  
import Home from "./components/Home/home"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={Home()}></Route>
          <Route path="/donate" element={<DonateMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { useEffect, useState } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Header } from "./header";
import JsonData from "../data/data.json";
import { Features } from "./features";
import { Info } from "./info";

export default function Home() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Info />
      <Contact data={landingPageData.Contact} />
      
    </div>
  );
}

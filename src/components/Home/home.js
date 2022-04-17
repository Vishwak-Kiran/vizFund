import React from "react";
import { useEffect, useState } from "react";
import { About } from "../about";
import { Contact } from "../contact";
import { Header } from "../header";
import { Team } from "../Team";
import JsonData from "../data/data.json"

export default function Home() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Contact />
    </div>
  );
}

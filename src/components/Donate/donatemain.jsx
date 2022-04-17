import React from "react";
import { useEffect, useState } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Header } from "./header";
import JsonData from "../data/data.json";
import Donate from "./donate";
import { Features } from "./features";

export default function Home() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features}/>
      <Donate />
      <Contact />
    </div>
  );
}

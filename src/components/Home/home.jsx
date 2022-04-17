import React from "react";
import { useEffect, useState } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { Header } from "./header";
import { Team } from "./Team";
import JsonData from "../data/data.json";
import { Features } from "./features";
import { Testimonials } from "./testimonials";
import { Gallery } from "./gallery";

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
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      
    </div>
  );
}

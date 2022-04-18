import React from "react";
import { useEffect, useState } from "react";

import { Contact } from "../Donate/contact";
import JsonData from "../data/data.json";
import FeaturesFood from "./featuresFood";
import HeaderFood from "./headerFood";
import { Team } from "./Team";




const DonateFood = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    return (
        <div>
          <HeaderFood></HeaderFood>
          <FeaturesFood></FeaturesFood>
          <Team data={landingPageData.Team}/>
          <Contact />
          <Contact data={landingPageData.Contact}/>
        </div>
        
      );
}

 
export default DonateFood;
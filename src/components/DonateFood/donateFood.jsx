import React from "react";
import { useEffect, useState } from "react";

import { Contact } from "../Donate/contact";
import { Header } from "../Donate/header";
import JsonData from "../data/data.json";
import Donate from "../Donate/donate";
import { Features } from "../Donate/features";
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
        </div>
        
      );
}

 
export default DonateFood;
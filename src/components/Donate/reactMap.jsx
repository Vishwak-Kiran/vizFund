import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";



const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const reactMap = () => {
    return ( 
        <div>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
        </ComposableMap>
      </div>
     );
}
 
export default reactMap;
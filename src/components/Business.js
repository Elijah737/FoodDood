import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import BusinessMap from "./BusinessMap";
import "../CSS/business.css"

const Business =() => {

  const [bus, setBus] = useState([]);

  useEffect(() => {
    axios
      .get(`/business/all`)
      .then((res) => {
        setBus(res.data);
        console.log("res.data",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


    return (
      <div className="busMapContainer" >
      <div className="appName">
        <span className="appFood"><h1 className="foodLogo" >FOOD</h1></span><span className="appDood"><h1 className="doodLogo" >DOOD</h1></span>
      </div>
      
      <h3 className="localRest" >Your Local Restaurants</h3>

      <div className="menuMap">
        {bus.map((business, index) => {
          return(
          <BusinessMap
            // deleteMenuItem = {deleteMenuItem}
            business={business}
            index={index}
          />
          );
          })}
      </div>

      </div>
    );
  }
  
  export default Business;
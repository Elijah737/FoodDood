import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import BusinessMap from "./BusinessMap";

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
      <>
      <h1>Business</h1>
      <h3>Mapped local restaurants</h3>

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

      </>
    );
  }
  
  export default Business;
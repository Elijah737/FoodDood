import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getBusiness, getMenu } from '../redux/reducer';
import Menu from "./Menu"
import axios from 'axios';

const Restaurant = (props) => {

const [menu, setMenu] = useState([]);
const [nameInput, setName] = useState("");
const [cuisineInput, setCuisine] = useState("");
const [specialitiesInput, setSpecialities] = useState("");
const [specialsInput, setSpecials] = useState("");

const business_id = props.business.business_id;

const handleNameInput = (event) => {
  const {value} = event.target;
  setName(value)
};

const handleCuisineInput = (event) => {
  const {value} = event.target;
  setCuisine(value)
};

const handleSpecialitiesInput = (event) => {
  const {value} = event.target;
  setSpecialities(value)
};

const handleSpecialsInput = (event) => {
  const {value} = event.target;
  setSpecials(value)
};

console.log( "props", props)
console.log("businessId", props.business.business_id)

useEffect(() => {
  console.log(business_id)
  axios
    .get(`/api/menu/get/${props.business.business_id}`)
    .then((res) => {
      setMenu(res.data);
      console.log("res.data",res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [])


// useEffect(() => {
//   getMenu();
// }, []);

// const getMenu = async () => {
//   const response = await fetch(
//     `/api/menu/get/${busId}`
//   );
//   const data = await response.json();
//   setMenu(data);
// };


// function getBusMenu(busId){
//   axios
//     .get(`/api/menu/get/${busId}`)
//     .then((res) => {
//       console.log( "res", res);
//     })
//     .catch((err) => {
//       alert("error in fetching Menu");
//     });
// };

// console.log("Menu", menu)

const editBusiness = () => {
  axios
    .put(`/business/business/${props.business.business_id}`, {
      business_name: nameInput,
      cuisine: cuisineInput,
      specialities: specialitiesInput,
      specials: specialsInput
    })
    .then((res) => {
      props.getBusiness();
      props.history.push("/restaurant");
    })
    .catch((err) => {
      alert("error in updating information");
    });
};

  // getBusMenu(busId);
  // console.log("getBusMenu", props.getMenu())

    console.log("props.menu", props.menu)
    console.log("busId", business_id)

    return (
      <>
      <h1>{props.business.business_name}</h1>
      <h3>{props.business.cuisine}</h3>
      <h3>{props.business.specialities}</h3>
      <h3>{props.business.specials}</h3>
      <input
          name="businessName"
          placeholder="enter business name"
          value={nameInput}
          onChange={handleNameInput}
        />
        <input
          name="cuisine"
          placeholder="enter cuisine type"
          value={cuisineInput}
          onChange={handleCuisineInput}
        />
        <input
          name="specialities"
          placeholder="specialities"
          value={specialitiesInput}
          onChange={handleSpecialitiesInput}
        />
        <input
          name="specials"
          placeholder="specials"
          value={specialsInput}
          onChange={handleSpecialsInput}
        />

        <button onClick={editBusiness}>Edit Business</button>

      <h3>Mapped Menu Items</h3>

      <div className="menuMap">
        {menu.map(menu => (
          <Menu
            key={menu.menu_item_id}
            title={menu.item_name}
          />
        ))}
      </div>


      </>
    );
  
};

const mapStateToProps = (initialState) => {
  return {
    business: initialState.business,
    menu: initialState.menu
  }
}

export default connect(mapStateToProps, { getBusiness, getMenu })(Restaurant);
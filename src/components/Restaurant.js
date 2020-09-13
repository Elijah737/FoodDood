import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getBusiness, getMenu } from '../redux/reducer';
// import '../App.css';
import "../CSS/restaurant.css"
import Menu from "./Menu";
import axios from 'axios';

const Restaurant = (props) => {

const [menu, setMenu] = useState([]);
const [nameInput, setName] = useState(`${props.business.business_name}`);
const [cuisineInput, setCuisine] = useState(`${props.business.cuisine}`);
const [specialitiesInput, setSpecialities] = useState(`${props.business.specialities}`);
const [specialsInput, setSpecials] = useState(`${props.business.specials}`);

const [itemNameInput, setItemName] = useState("");
const [itemPriceInput, setItemPrice] = useState("");
const [itemDescInput, setItemDesc] = useState("");
const [itemImageInput, setItemImage] = useState("");


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



const handleTitleInput = (event) => {
  const {value} = event.target;
  setItemName(value)
  }

const handlePriceInput = (event) => {
  const {value} = event.target;
  setItemPrice(value)
  }

const handleImageInput = (event) => {
  const {value} = event.target;
  setItemImage(value)
  }

const handleDescriptionInput = (event) => {
  const {value} = event.target;
  setItemDesc(value)
  }


useEffect(() => {
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


  // axios
  // .get(...)
  // .then((response) => {
  //   return axios.get(...); // using response.data
  // })
  // .then((response) => {
  //   console.log('Response', response);
  // });


const editBusiness = () => {
  axios
    .put(`/business/business/${props.business.business_id}`, {
      business_name: nameInput,
      cuisine: cuisineInput,
      specialities: specialitiesInput,
      specials: specialsInput
    })
    .then((res) => {
        console.log( "edit business data", res);
            
        // this.setState({data: data});

        setName(res.data[0].business_name);
        setCuisine(res.data[0].cuisine);
        setSpecialities(res.data[0].specialities);
        setSpecials(res.data[0].specials);
    })
    .catch((err) => {
      alert("error in updating information");
    });
};


const addToMenu = () => {
  axios
    .post(`/api/menu/add/${props.business.business_id}`,{
  item_name: itemNameInput, 
  item_price: itemPriceInput, 
  item_description: itemDescInput, 
  item_image: itemImageInput,
  business_id: props.business.business_id
  })
  .then((res) => {
    setMenu(res.data);
  })
  .catch((err) => {
    alert("error in adding to menu");
  });
}

  console.log("setMenu", setMenu)
  console.log("Restaurant Props", props)
  console.log("initial state menu", mapStateToProps.menu)
  // console.log( "props getMenu pass in business ID", props.getMenu(props.business.business_id))

    return (
      <div className="businessInfoPage" >
    
        <h1 className="busInfoBusName">{nameInput}</h1>
        <input
          name="businessName"
          placeholder="enter business name"
          value={nameInput}
          onChange={handleNameInput}
          />
        
        <h3 className="busInfo" >{cuisineInput}</h3>
        <input
          name="cuisine"
          placeholder="enter cuisine type"
          value={cuisineInput}
          onChange={handleCuisineInput}
          />

        <h3 className="busInfo" >{specialitiesInput}</h3>
        <input
          name="specialities"
          placeholder="specialities"
          value={specialitiesInput}
          onChange={handleSpecialitiesInput}
          />

        <h3 className="busInfo" >{specialsInput}</h3>
        <input
          name="specials"
          placeholder="specials"
          value={specialsInput}
          onChange={handleSpecialsInput}
        />

        <button className="busEditBut" onClick={editBusiness}>Submit Edit</button>

        <h1 className="busAddToMenu" >Add To Menu</h1>

        <input
            name="title"
            placeholder="enter item name"
            value={itemNameInput}
            onChange={handleTitleInput}
            />

        <input
            name="price"
            placeholder="enter item price"
            // type="number"
            value={itemPriceInput}
            onChange={handlePriceInput}
            />

        <input
            name="image"
            placeholder="enter image URL"
            value={itemImageInput}
            onChange={handleImageInput}
            />

        <input
            name="description"
            placeholder="enter item description"
            value={itemDescInput}
            onChange={handleDescriptionInput}
            />

      <button className="menuEditBut" onClick={addToMenu}>Add to Menu</button>

      <div className="menuMapHead" >
      <h1 className="menuMapHead" >Menu Items</h1>
      </div>

      <div className="menuMapMenu">
        {menu.map((menuItem, index) => {
          return(
          <Menu
            // deleteMenuItem = {deleteMenuItem}
            menuItem={menuItem}
            index={index}
          />
          );
          })}
      </div>


      </div>
    );
  
};

const mapStateToProps = (initialState) => {
  return {
    business: initialState.business,
    menu: initialState.menu
  }
}

export default connect(mapStateToProps, { getBusiness, getMenu })(Restaurant);
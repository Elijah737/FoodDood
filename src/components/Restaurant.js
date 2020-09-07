import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getBusiness, getMenu } from '../redux/reducer';
import '../App.css';
import Menu from "./Menu";
import axios from 'axios';

const Restaurant = (props) => {

const [menu, setMenu] = useState([]);
const [nameInput, setName] = useState("");
const [cuisineInput, setCuisine] = useState("");
const [specialitiesInput, setSpecialities] = useState("");
const [specialsInput, setSpecials] = useState("");

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


const editBusiness = () => {
  axios
    .put(`/business/business/${props.business.business_id}`, {
      business_name: nameInput,
      cuisine: cuisineInput,
      specialities: specialitiesInput,
      specials: specialsInput
    })
    .then(data => {
        this.setState({data: data}); 
      // props.getBusiness();
      // props.history.push("/restaurant");
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


    return (
      <>
    
        <h1>{props.business.business_name}</h1>
        <input
          name="businessName"
          placeholder="enter business name"
          value={nameInput}
          onChange={handleNameInput}
          />
        

        <h3>{props.business.cuisine}</h3>
        <input
          name="cuisine"
          placeholder="enter cuisine type"
          value={cuisineInput}
          onChange={handleCuisineInput}
          />

        <h3>{props.business.specialities}</h3>
        <input
          name="specialities"
          placeholder="specialities"
          value={specialitiesInput}
          onChange={handleSpecialitiesInput}
          />

        <h3>{props.business.specials}</h3>
        <input
          name="specials"
          placeholder="specials"
          value={specialsInput}
          onChange={handleSpecialsInput}
        />

        <button onClick={editBusiness}>Submit Edit</button>

      <h1>Add To Menu</h1>

        <input
            name="title"
            placeholder="enter item name"
            value={itemNameInput}
            onChange={handleTitleInput}
            />

        <input
            name="price"
            placeholder="enter item price"
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

      <button onClick={addToMenu}>Add to Menu</button>

      <h3>Mapped Menu Items</h3>

      <div className="menuMap">
        {menu.map((menuItem, index) => {
          return(
          <Menu 
            menuItem={menuItem}
            index={index}
          />
          );
          })}
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
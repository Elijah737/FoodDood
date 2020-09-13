import React, {useState} from "react";
import { getBusiness, getMenu } from '../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.css';

const Menu = (props) => {

const [titleInput, setTitle] = useState(`${props.menuItem.item_name}`);
const [priceInput, setPrice] = useState(`${props.menuItem.item_price}`);
const [imageURL, setImage] = useState(`${props.menuItem.item_image}`);
const [itemDescription, setDescription] = useState(`${props.menuItem.item_description}`);


    const handleTitleInput = (event) => {
        const {value} = event.target;
        setTitle(value)
        }

    const handlePriceInput = (event) => {
        const {value} = event.target;
        setPrice(value)
        }

    const handleImageInput = (event) => {
        const {value} = event.target;
        setImage(value)
        }

    const handleDescriptionInput = (event) => {
        const {value} = event.target;
        setDescription(value)
        }

        // console.log("KEY", key)
        // console.log("Menu Item ID", menu_item_id)
        console.log("Menu Props", props)


        const editMenuItem = () => {
            axios
              .put(`/api/menu/edit/${props.menuItem.menu_item_id}`, {
                item_name: titleInput,
                item_price: priceInput,
                item_image: imageURL,
                item_description: itemDescription
              })
              .then((res) => {
                props.setMenu(res.data); 
                // props.get_menu();
                // props.history.push("/restaurant");
              })
              .catch((err) => {
                alert("error in updating information");
              });
          };


          const deleteMenuItem = () => {
            axios
            .delete(`/api/menu/delete/${props.menuItem.menu_item_id}`,{
              menu_item_id: props.menuItem.menu_item_id,
              business_id: props.business.business_id
            })
            .then((res) => {
              props.setMenu(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
            };



  return (
    <div key={props.index} className = 'menu_item_container' >
      <div>
      <h1 className="menuMapItemName" >{titleInput}</h1>
        <input
            name="title"
            placeholder="enter item name"
            value={titleInput}
            onChange={handleTitleInput}
            />
      </div>

      <div>
      <h3 className="menuMapItemPrice" >${priceInput}</h3>
        <input
            name="price"
            placeholder="enter item price"
            value={priceInput}
            onChange={handlePriceInput}
            />
      </div>

      <div>
      <img className="menuMapItemImage" src={imageURL} alt={props.menuItem.item_image} />
        <div>
        <input
            name="image"
            placeholder="enter image URL"
            value={imageURL}
            onChange={handleImageInput}
            />
        </div>
      </div>

      <div>
      <h3 className="menuMapItemDesc" >{itemDescription}</h3>
        <input
            name="description"
            placeholder="enter item description"
            value={itemDescription} 
            onChange={handleDescriptionInput}
            />
      </div>

      <div className="buttCont" >
      <button className="menuEditBut" onClick={editMenuItem}>Edit</button>

      <button className="menuEditBut"
          onClick={() => {
            deleteMenuItem(props.menuItem.menu_item_id);
          }}
        >
          Delete
      </button>
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

export default connect(mapStateToProps, { getBusiness, getMenu })(Menu);

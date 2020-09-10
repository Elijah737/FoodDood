import React from 'react';
// import BusinessInfo from "./BusinessInfo";
import { withRouter } from "react-router-dom";
import '../App.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getMenu } from '../redux/reducer';


const MenuItemMap = (props) => {
    console.log("MenuItemMap Props", props)

function addToCart (){
    props.cart.push({ itemId : props.item.menu_item_id, itemName : props.item.item_name, itemPrice : props.item.item_price});
    props.cartTotal.push(props.item.item_price);
    props.history.push("/cart");
}

    return(
        <div onClick={() => {addToCart(props.item.menu_item_id, props.item.item_name, props.item.item_price);}} 
            key={props.index} 
            className="menuHolder" >
            <div className="menuItemName" >
                <h1 className="menuItemText" >{props.item.item_name}</h1>
            </div>
            
            <div>
                <h2 className="menuItemText" >${props.item.item_price}</h2>
            </div>
            
            <div>
                <h2 className="menuItemText" >{props.item.item_description}</h2>
            </div>         

            <div>
            <img className="image" src={props.item.item_image} alt={props.item.item_image} />
            </div>

        </div>
    )
};


const mapStateToProps = (initialState) => {
    return {
      menu: initialState.menu,
      cart: initialState.cart,
      cartTotal: initialState.cartTotal
    }
  }

export default connect(mapStateToProps, { getMenu }) (withRouter(MenuItemMap));
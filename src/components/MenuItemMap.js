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
}

    return(
        <div onClick={() => {addToCart(props.item.menu_item_id, props.item.item_name, props.item.item_price);}} 
            key={props.index} 
            className="businessHolder" >

            <h1>{props.item.item_name}</h1>
            <h1>{props.item.item_price}</h1>
            <h1>{props.item.item_description}</h1>
            <img src={props.item.item_image} alt={props.item.item_image} />
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
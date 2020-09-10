import React from 'react';
// import BusinessInfo from "./BusinessInfo";
import { withRouter } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getMenu } from '../redux/reducer';


const CartMap = (props) => {

    return(
        <div key={props.index} className="cartItem"  >
            <h1>{props.item.itemName}</h1>
            <h1>{props.item.itemPrice}</h1>
            <textarea name="itemRequest" placeholder="order requests"></textarea>
        </div>
    )
};


const mapStateToProps = (initialState) => {
    return {
      menu: initialState.menu,
      businessName: initialState.businessName,
      businessName: initialState.businessName,
      cart: initialState.cart,
      cartTotal: initialState.cartTotal
    }
  }

export default connect(mapStateToProps, { getMenu }) (withRouter(CartMap));
import React from 'react';
// import BusinessInfo from "./BusinessInfo";
import { withRouter } from "react-router-dom";
// import '../App.css';
import "../CSS/cart.css";
import CartMap from "./CartMap";
import axios from 'axios';
import { connect } from 'react-redux';
import { getMenu } from '../redux/reducer';


const Cart = (props) => {
console.log("cart props", props)
console.log("cart cart props", props.cart)
console.log("index", props.index)
console.log("cart index", props.cart.index)


const sum = props.cartTotal.reduce((acc, val) => acc + val , 0);

    return(
        <div className="cartContainer" >
            
        <h1 className="cartLogo" >FOODOOD</h1>
        <h1 className="cartLabel" >CART</h1>

        <div className="cartItemMap">
        {props.cart.map((item, index) => {
          return(
          <CartMap
            item={item}
            index={index}
          />
          );
          })}
      </div>

      <h1 className="cartTotal" >Cart Total: ${sum}</h1>


      {/* <div>
        { props.cartTotal.reduce((acc, val) => {
            return (
            <h1>{sum}</h1>
            )
        },0)}
        </div> */}


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

export default connect(mapStateToProps, { getMenu }) (withRouter(Cart));
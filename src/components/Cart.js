import React from 'react';
// import BusinessInfo from "./BusinessInfo";
import { withRouter } from "react-router-dom";
import '../App.css';
import CartMap from "./CartMap";
import axios from 'axios';
import { connect } from 'react-redux';
import { getMenu } from '../redux/reducer';


const Cart = (props) => {
console.log("cart props", props)
console.log("cart cart props", props.cart)

const sum = props.cartTotal.reduce((acc, val) => acc + val , 0);

    return(
        <div>
        <h1>CART</h1>

        <div className="menuItemMap">
        {props.cart.map((item, index) => {
          return(
          <CartMap
            item={item}
            index={index}
          />
          );
          })}
      </div>

      <h1>Cart Total: ${sum}</h1>


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
import React from 'react';
// import '../App.css';
// import axios from 'axios';
import MenuItemMap from './MenuItemMap';
import { connect } from 'react-redux';
import { getMenu, getBusiness } from '../redux/reducer';


const BusinessInfo = (props) => {
    
    const sum = props.cartTotal.reduce((acc, val) => acc + val , 0);

    return (
        <div>
        <h1>{props.businessName[0]}</h1>

        <h1>Cart Sum: ${sum}</h1>
        
        {console.log("businessInfo Props",props)}
        {console.log("businessInfo Props menu",props.menu[0])}

        <h1>MENU</h1>

        <div className="menuItemMap">
        {props.menu[0].map((item, index) => {
          return(
          <MenuItemMap
            item={item}
            index={index}
          />
          );
          })}
      </div>


        </div>
        );
    };
    

// export default BusinessInfo;


const mapStateToProps = (initialState) => {
    return {
      business: initialState.business,
      menu: initialState.menu,
      businessName: initialState.businessName,
      cart: initialState.cart,
      cartTotal: initialState.cartTotal
    }
  }

export default connect(mapStateToProps, { getMenu, getBusiness })(BusinessInfo);
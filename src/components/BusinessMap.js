import React from 'react';
// import BusinessInfo from "./BusinessInfo";
import { withRouter } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getMenu } from '../redux/reducer';


const BusinessMap = (props) => {
    console.log("BusinessMap Props", props)


    const getBusinessInfo = () => {
        axios
        .get(`/api/menu/get/${props.business.business_id}`)
        .then((res) => {
        //   props.setMenu(res.data);
        console.log(res);
        props.menu.push(res.data);
        props.businessName.push(props.business.business_name)
        props.history.push("/businessinfo");
        })
        .catch((err) => {
          console.log(err);
        });
        };



    return(
        <div onClick={() => {getBusinessInfo(props.business.business_id);}} 
            key={props.index} 
            className="businessHolder" >

            <h1 className="busName" >{props.business.business_name}</h1>
            <h3>Cuisine: {props.business.cuisine}</h3>
            <h3>Specialities: {props.business.specialities}</h3>
            <h3>Specials: {props.business.specials}</h3>
        </div>
    )
};


const mapStateToProps = (initialState) => {
    return {
      menu: initialState.menu,
      businessName: initialState.businessName
    }
  }

export default connect(mapStateToProps, { getMenu }) (withRouter(BusinessMap));

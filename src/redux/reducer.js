import axios from 'axios';

const initialState = {
    user: { email: '', userId: 0 },
    business: { email:'', businessId: 0 },
    menu: []
};

const GET_USER = "GET_USER";
const GET_BUSINESS = "GET BUSINESS";
const GET_MENU = "GET_MENU";

const busId = initialState.business.businessId

export function getUser(){
    const user = axios
    .get("/auth/user")
    .then((res) => res.data)
    // .then((res) => res.json)
    .catch((err) => console.log(err));

    return {
        type: GET_USER,
        payload: user,
    };
}

export function getBusiness(){
    const business = axios
    .get("/business/business")
    .then((res) => res.data)
    .catch((err) => console.log(err));

    return {
        type: GET_BUSINESS,
        payload: business,
    };
}

export function getMenu(){
    const menu = axios
    .get(`/api/menu/get/${busId}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
    return {
        type: GET_MENU,
        payload: menu,
    };
}

export default function reducer(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
        case GET_USER + "_REJECTED":
            return state;
        case GET_USER + "_FULFILLED":
            if (payload){
                return { ...state, user: payload };
            } else return state;
        case GET_USER + "_PENDING":
            return state;

            case GET_BUSINESS + "_REJECTED":
            return state;
        case GET_BUSINESS + "_FULFILLED":
            if (payload){
                return { ...state, business: payload };
            } else return state;
        case GET_BUSINESS + "_PENDING":
            return state;

            case GET_MENU + "_REJECTED":
                return state;
            case GET_MENU + "_FULFILLED":
                if (payload){
                    return { ...state, menu: payload };
                } else return state;
            case GET_MENU + "_PENDING":
                return state;
    
            default:
                return state;
    }
}


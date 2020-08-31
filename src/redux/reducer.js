import axios from 'axios';

const initialState = {
    user: { email: '', userId: 0 },
    business: { email:'', businessId: 0 }
};

const GET_USER = "GET_USER";
const GET_BUSINESS = "GET BUSINESS";

export function getUser(){
    const user = axios
    .get("/auth/user")
    .then((res) => res.data)
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

        default:
            return state;
    }
}


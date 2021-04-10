//actions-list API

//action 'async'
import jsonPlaceholder from "../APIs/jsonPlaceholder";

export const fetchAPIPosts = async () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_API",
      payload: response,
    });
  };
};

//action 'Select'
export const selectPolicy = (name) => {
  return {
    type: "SELECTED",
    payload: {
      name: name,
    },
  };
};

//action 'Pay'
export const makeClaim = (name, howMuch) => {
  return {
    type: "CLAIM",
    payload: {
      name: name,
      howMuch: howMuch,
    },
  };
};
// action 'Amount'
export const calculateAmount = (name, amount) => {
  return {
    type: "AMOUNT",
    payload: {
      name: name,
      amount: amount,
    },
  };
};
//action 'Create'
export const createPolicy = (name) => {
  return {
    type: "+POLICY",
    payload: {
      name: name,
      amount: 5,
    },
  };
};
//action 'Remove'
export const deletePolicy = (name) => {
  return {
    type: "-POLICY",
    payload: {
      name: name,
    },
  };
};

//reducer-list API
import { combineReducers } from "redux";
export const PickaReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API":
      return action.payload;
    case "SELECTED":
      return action.payload;
    case "CLAIM":
      return [...state, action.payload];
    case "+POLICY":
      return [...state, action.payload.name];
    case "-POLICY":
      return state.filter((policy) => policy !== action.payload.name);
    default:
      return state;
  }
};

//reducer 'CALCULATE'
export const AccOunting = (bagOfCash = null, action) => {
  if (action.type === "CLAIM") {
    return bagOfCash - action.payload.howMuch;
  } else if (action.type === "+POLICY") {
    return bagOfCash + action.payload.amount;
  }
  return bagOfCash;
};

// Setup
export default combineReducers({
  PickaReducer: PickaReducer,
  Accounting: AccOunting,
});

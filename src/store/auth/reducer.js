import { SIGN_OUT, SIGN_IN, SIGN_UP } from "../actionTypes";

const initialAuthState = localStorage.getItem("jwt")
  ? {
      token: localStorage.jwt,
    }
  : {
      token: "",
    };

export default function authentication(state = initialAuthState, action) {
  switch (action.type) {
    case SIGN_OUT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SIGN_IN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

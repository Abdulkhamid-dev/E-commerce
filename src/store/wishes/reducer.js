import { GET_WISHES, DELETE_WISH } from "../actionTypes";

const initailState = [];

export default function wishReducer(state = initailState, action) {
  switch (action.type) {
    case GET_WISHES: {
      return [...action.payload];
    }
    case DELETE_WISH: {
      return [ ...action.payload];
    }
    default:
      return state;
  }
}

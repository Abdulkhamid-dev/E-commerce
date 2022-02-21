import { GET_CARDS, DELETE_CARD } from "../actionTypes";

const initailState = []

export default function cardReducer(state = initailState, action) {
  switch (action.type) {
    case GET_CARDS: {
      return [
        ...action.payload,
      ];
    }
    case DELETE_CARD: {
      return [
        ...action.payload,
      ];
    }
    default:
      return state;
  }
}

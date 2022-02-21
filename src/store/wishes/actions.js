import {GET_WISHES, DELETE_WISH} from '../actionTypes'


export const getWisheslist = (payload) => ({
    type: GET_WISHES,
    payload
  });
  
  export const deleteWish = (payload) => ({
    type: DELETE_WISH,
    payload,
  });
  
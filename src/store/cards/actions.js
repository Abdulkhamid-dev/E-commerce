import {DELETE_CARD, GET_CARDS} from '../actionTypes'


export const getCardlist = (payload) => ({
    type: GET_CARDS,
    payload
  });
export const deleteCard = (payload) => ({
    type: DELETE_CARD,
    payload
  });
import { SIGN_OUT, SIGN_IN, SIGN_UP } from '../actionTypes';


export const signOutAction = () => ({
  type: SIGN_OUT
});

export const signInAction = (payload) => ({
  type: SIGN_IN,
  payload,
});
export const signUpAction = (payload) => ({
  type: SIGN_UP,
  payload,
});

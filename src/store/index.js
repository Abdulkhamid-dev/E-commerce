import { createStore, combineReducers,  } from "redux";
import authentication from './auth/reducer'
import cardReducer from './cards/reducer'
import wishReducer from './wishes/reducer'

const rootReducer = combineReducers({
    auth: authentication,
    wishes: wishReducer,
    cards: cardReducer,
})

const store = createStore(rootReducer)

export {store}
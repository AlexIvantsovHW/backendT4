import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import TableReducer from './TableReducer'


let reducers=combineReducers({
    form:formReducer,
    table:TableReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;

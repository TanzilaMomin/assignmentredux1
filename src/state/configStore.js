import { createStore, combineReducers } from "redux";
import { foodsReducer } from "./reducer/foodsReducer";
import { colorsReducer } from "./reducer/colorsReducer";

export const configStore=()=>{
    const store = createStore(
        combineReducers({foodsReducer, colorsReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store ;
}
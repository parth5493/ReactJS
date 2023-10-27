import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index.jsx' 

console.log("CustomStore Called");

const initialState = {};
let middleware = [thunk];
const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware
            (...middleware))    
)

export default store;
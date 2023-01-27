import { createStore } from "redux"
import counterReducer from "./services/reducers/conterReducer"
 const store = createStore(counterReducer);
 export default store;
import {combineReducers, legacy_createStore} from "redux";
import {ValueReducer} from "./ValueReducer";


const rootReducer = combineReducers({
    counterValue: ValueReducer

})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
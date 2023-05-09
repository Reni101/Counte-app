import {combineReducers, legacy_createStore} from "redux";
import {valueReducer} from "./ValueReducer";
import {loadState, saveState} from "../Utils/localstorage-utils";


const rootReducer = combineReducers({
    counterValue: valueReducer
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counterValue: store.getState().counterValue
    });
});
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
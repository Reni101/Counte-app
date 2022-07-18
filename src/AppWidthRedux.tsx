import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/Store";
import {changeSettingAC} from "./Redux/ValueReducer";


export default AppWidthRedux;

function AppWidthRedux() {

    const changeSetting = useSelector<AppRootStateType, boolean >(state => state.counterValue.isSetting)
    const startValue = useSelector<AppRootStateType, number>(state => state.counterValue.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterValue.maxValue)
    const dispatch = useDispatch()

    //===================== логика смены компонент + сетает в localstorage ============
    const changeSet = (isSetting:boolean) => {
    dispatch(changeSettingAC(isSetting))

    }

    return (
        <>
            {changeSetting ?
                <Counter changeSet={changeSet}
                         startValue={startValue}
                         maxValue={maxValue}

                /> : <Settings changeSet={changeSet}
                               startValue={startValue}
                               maxValue={maxValue}

                />}
        </>
    );
}

import React, {useEffect} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/Store";
import {changeSettingAC} from "./Redux/ValueReducer";


export default App;

function App() {
    const dispatch = useDispatch()

    const changeSetting = useSelector<AppRootStateType, boolean >(state => state.counterValue.isSetting)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counterValue.currentValuer)
    const startValue = useSelector<AppRootStateType, number>(state => state.counterValue.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterValue.maxValue)

    const changeSet = (isSetting:boolean) => {
    dispatch(changeSettingAC(isSetting))

    }

    return (
        <>
            {changeSetting ?
                <Counter changeSet={changeSet}
                         startValue={startValue}
                         maxValue={maxValue}
                         currentValue={currentValue}

                /> : <Settings changeSet={changeSet}
                               startValue={startValue}
                               maxValue={maxValue}

                />}
        </>
    );
}

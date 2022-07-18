import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/Store";


export default AppWidthRedux;

function AppWidthRedux() {

    /*    const [changeSetting, setChangeSetting] = useState<boolean>(true)
      const [startValue, setStartValue] = useState<number>(0)
       const [maxValue, setMaxValue] = useState<number>(1)*/

/*    useEffect(() => {
        let getMaxValue = localStorage.getItem("MaxValue")
        let getStartValue = localStorage.getItem("StartValue")
        if (getMaxValue && getStartValue) {
            setMaxValue(JSON.parse(getMaxValue))
            setStartValue(JSON.parse(getStartValue))
        }
    }, [])*/

    const changeSetting = useSelector<AppRootStateType, boolean >(state => state.counterValue.isSetting)
    const startValue = useSelector<AppRootStateType, number>(state => state.counterValue.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counterValue.maxValue)
    const dispatch = useDispatch()

    //===================== логика смены компонент + сетает в localstorage ============
    const changeSet = (isSetting:boolean) => {

        setChangeSetting(!changeSetting)
        localStorage.setItem("MaxValue", JSON.stringify(maxValue))
        localStorage.setItem("StartValue", JSON.stringify(startValue))

    }

    return (
        <>
            {changeSetting ?
                <Counter changeSet={changeSet}
                         startValue={startValue}
                         maxValue={maxValue}

                /> : <Settings changeSet={changeSet}
                               setStartValue={setStartValue}
                               startValue={startValue}
                               maxValue={maxValue}
                               setMaxValue={setMaxValue}
                />}
        </>
    );
}

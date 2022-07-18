import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";


export default App;

function App() {

  /*  const [changeSetting, setChangeSetting] = useState<boolean>(true)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)

    useEffect(() => {
        let getMaxValue = localStorage.getItem("MaxValue")
        let getStartValue = localStorage.getItem("StartValue")
        if (getMaxValue && getStartValue) {
            setMaxValue(JSON.parse(getMaxValue))
            setStartValue(JSON.parse(getStartValue))
        }
    }, [])

    //===================== логика смены компонент + сетает в localstorage ============
    const changeSet = () => {
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
    );*/
}

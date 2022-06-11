import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";


export default App;

function App() {

    const [changeSetting, setChangeSetting] = useState(true)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)


    //===================== логика смены компонент ============
    const changeSet = () => {
        setChangeSetting(!changeSetting)
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

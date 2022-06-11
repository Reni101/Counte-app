import React, {useState} from 'react';
import CounterNumber from "./CounterNumber/CounterNumber";
import UniversalButton from "./CounterButton/UniversalButton";


type CounterPropsType = {
    changeSet: ()=>void
    startValue: number
    maxValue: number
}

const Counter = (props: CounterPropsType) => {
    let [counter, setCounter] = useState<number>(props.startValue)

//====================  логика кнопак Inc + Reset===========================
    const inc = () => {
        setCounter(Number(counter) + 1)

    }
    const reset = () => {
        setCounter(counter = props.startValue)
        localStorage.clear()
    }
//============================== Логика Disabled кнопок ==================
    const changeDisableReset = () => counter === props.startValue
    const ResetButtonDisable = changeDisableReset()

    const changeDisableInC = () => counter >= props.maxValue
    const IncButtonDisable = changeDisableInC();
// ==========================           ========================



//====================== JSX ===================

    return (
        <div className={"MainBox"}>

            <CounterNumber counter={counter} maxValue = {props.maxValue}/>

            <div className={"ButtonBox"}>

                <UniversalButton
                    callback={inc}
                    title={"inc"}
                    Disable={IncButtonDisable}
                />

                <UniversalButton
                    callback={reset}
                    title={"reset"}
                    Disable={ResetButtonDisable}

                />

                <UniversalButton
                    callback={props.changeSet}
                    title={"set"}
                    Disable={false}
                />

            </div>
        </div>
    );
};

export default Counter;
import React, {useEffect, useState} from 'react';
import CounterNumber from "./CounterNumber/CounterNumber";
import UniversalButton from "./CounterButton/UniversalButton";


type CounterPropsType = {
    changeSet: (isSetting: boolean) => void
    startValue: number
    maxValue: number
}

const Counter = (props: CounterPropsType) => {
    const [counter, setCounter] = useState<number>(props.startValue)

/*
    useEffect(() => {
        setCounter(props.startValue);
    }, [props.startValue])
*/

//====================  логика кнопок Inc + Reset===========================
    const inc = () => {
        setCounter(counter + 1)

    }
    const reset = () => {
        setCounter(props.startValue)
    }
//============================== Логика Disabled кнопок ==================
    const changeDisableReset = () => counter === props.startValue
    const ResetButtonDisable = changeDisableReset()

    const changeDisableInC = () => counter >= props.maxValue
    const IncButtonDisable = changeDisableInC();


//======================Callback================
    const callbackisSetting = () => {
        props.changeSet(false)

    }

//====================== JSX ===================


    return (
        <div className={"MainBox"}>

            <CounterNumber counter={counter} maxValue={props.maxValue}/>

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
                    callback={callbackisSetting}
                    title={"set"}
                    Disable={false}
                />

            </div>
        </div>
    );
};

export default Counter;
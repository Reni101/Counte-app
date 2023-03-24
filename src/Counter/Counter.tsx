import React from 'react';
import CounterNumber from "./CounterNumber/CounterNumber";
import UniversalButton from "./CounterButton/UniversalButton";
import {useDispatch} from "react-redux";
import {changeCurrentValueAC} from "../Redux/ValueReducer";


type CounterPropsType = {
    changeSet: (isSetting: boolean) => void
    startValue: number
    maxValue: number
    currentValue: number
}

const Counter: React.FC<CounterPropsType> = ({currentValue, startValue, maxValue, changeSet}) => {
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(changeCurrentValueAC(currentValue + 1))

    }

    const resetHandler = () => {
        dispatch(changeCurrentValueAC(startValue))
    }

    const callbackisSetting = () => {
        changeSet(false)
    }

    return (
        <div className={"MainBox"}>

            <CounterNumber counter={currentValue} maxValue={maxValue}/>

            <div className={"ButtonBox"}>

                <UniversalButton
                    callback={incHandler}
                    title={"inc"}
                    Disable={currentValue >= maxValue}
                />

                <UniversalButton
                    callback={resetHandler}
                    title={"reset"}
                    Disable={startValue === currentValue}

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
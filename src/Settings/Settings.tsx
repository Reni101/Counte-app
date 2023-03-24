import React, {ChangeEvent} from 'react';
import UniversalButton from "../Counter/CounterButton/UniversalButton";
import {useDispatch} from "react-redux";
import {changeMaxValueAC, changeStartValueAC} from "../Redux/ValueReducer";

type SettingsPropsType = {
    changeSet: (isSetting: boolean) => void
    startValue: number
    maxValue: number

}

const Settings = (props: SettingsPropsType) => {
    const dispatch = useDispatch()

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxValueAC(+e.currentTarget.value))
    }

    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartValueAC(+e.currentTarget.value))
    }

    const errorStyleStartValue = () => {
        if (props.startValue < 0 || props.startValue >= props.maxValue) {
            return "InputNumber + InputNumberError"
        } else return "InputNumber"
    }

    const errorStyleMaxValue = () => {
        if (props.maxValue < 0 || props.startValue >= props.maxValue) {
            return "InputNumber + InputNumberError"
        } else return "InputNumber"
    }

    const disable = props.startValue < 0 || props.maxValue < 0 || props.startValue >= props.maxValue;

    const callbackIsSetting = () => {
        props.changeSet(true)

    }

    return (
        <div className={"SettingsMainBox"}>
            <div className={"SettingBox"}>

                <div className={"ValueString"}>
                    <span>Max value</span>
                    <input className={errorStyleMaxValue()}
                           type="number"
                           onChange={onChangeHandlerMaxValue}
                           value={props.maxValue}/>
                </div>

                <div className={"ValueString "}>
                    <span> Start value</span>
                    <input className={errorStyleStartValue()}
                           type="number"
                           onChange={onChangeHandlerStartValue}
                           value={props.startValue}/>
                </div>

            </div>
            <div className={"ButtonBox"}>
                <UniversalButton title="set" callback={callbackIsSetting} Disable={disable}/>
            </div>

        </div>
    );
};

export default Settings;
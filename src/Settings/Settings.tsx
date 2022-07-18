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

    //===================Error логика==============
    const ErrorStyleStartValue = () => {
        if (props.startValue < 0 || props.startValue >= props.maxValue) {
            return "InputNumber + InputNumberError"
        } else return "InputNumber"
    }
    const InputStyleSV = ErrorStyleStartValue()

    const ErrorStyleMaxValue = () => {
        if (props.maxValue < 0 || props.startValue >= props.maxValue) {
            return "InputNumber + InputNumberError"
        } else return "InputNumber"
    }
    const InputStyleMV = ErrorStyleMaxValue()

    const disable = props.startValue < 0 || props.maxValue < 0 || props.startValue >= props.maxValue;


    //======================Callback================
    const callbackisSetting = () => {
        props.changeSet(true)

    }
    //=======================================================

    return (
        <div className={"SettingsMainBox"}>
            <div className={"SettingBox"}>

                <div className={"ValueString"}>
                    <span>Max value</span>
                    <input className={InputStyleMV}
                           type="number"
                           onChange={onChangeHandlerMaxValue}
                           value={props.maxValue}/>
                </div>

                <div className={"ValueString "}>
                    <span> Start value</span>
                    <input className={InputStyleSV}
                           type="number"
                           onChange={onChangeHandlerStartValue}
                           value={props.startValue}/>
                </div>

            </div>
            <div className={"ButtonBox"}>
                <UniversalButton title="set" callback={callbackisSetting} Disable={disable}/>
            </div>

        </div>
    );
};

export default Settings;
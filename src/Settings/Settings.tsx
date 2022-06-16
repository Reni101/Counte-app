import React, {ChangeEvent} from 'react';
import UniversalButton from "../Counter/CounterButton/UniversalButton";

type SettingsPropsType = {
    changeSet: () => void
    setStartValue: (a: any) => void
    startValue: number
    maxValue: number
    setMaxValue: (a: any) => void
}

const Settings = (props: SettingsPropsType) => {


    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeHandlerStartValue = (e: ChangeEvent<HTMLInputElement>) => {

        props.setStartValue(+e.currentTarget.value)
    }

    //===================Error логика==============
    const ErrorStyleStartValue = () => {
        if (props.startValue < 0 || +props.startValue >= +props.maxValue) {
            return "InputNumber + InputNumberError"
        } else return "InputNumber"
    }
    const InputStyleSV = ErrorStyleStartValue()

    const ErrorStyleMaxValue = () => {
        if (props.maxValue < 0 || +props.startValue >= +props.maxValue) {
            return "InputNumber + InputNumberError"
        } else return "InputNumber"
    }
    const InputStyleMV = ErrorStyleMaxValue()

    const disable = props.startValue < 0 || props.maxValue < 0 || props.startValue >= props.maxValue;

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
                <UniversalButton title="set" callback={props.changeSet} Disable={disable}/>
            </div>

        </div>
    );
};

export default Settings;
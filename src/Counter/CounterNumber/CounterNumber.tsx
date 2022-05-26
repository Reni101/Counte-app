import React from 'react';
import {CounterType} from "../Counter";

type CounterNumberPropsType = {
    counter: CounterType
}

const CounterNumber = (props: CounterNumberPropsType) => {

    const NumberClass = props.counter < 5 ? "NumberBox" : "NumberBoxDisable";
    return (
        <div className={NumberClass}>
            {props.counter}
        </div>
    );
};

export default CounterNumber;

import React from 'react';


type CounterNumberPropsType = {
    counter: number
    maxValue:number
}

const CounterNumber = (props: CounterNumberPropsType) => {
debugger
    const NumberClass = props.counter < props.maxValue ? "NumberBox" : "NumberBox NumberBoxDisable";
    return (
        <div className={NumberClass}>
            {props.counter}
        </div>
    );
};

export default CounterNumber;

import React, {useState} from 'react';
import CounterNumber from "./CounterNumber/CounterNumber";
import CounterButton from "./CounterButton/CounterButton";

export type CounterType = number // 0 |1|2|3|4|5

const Counter = () => {
    let [counter, setCounter] = useState<CounterType>(0)

    const inc = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(counter = 0)
    }

    return (
        <div>

            <CounterNumber counter={counter}/>

            <CounterButton
                counter={counter}
                inc={inc}
                reset={reset}
            />
        </div>
    );
};

export default Counter;
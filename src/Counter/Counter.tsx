import React, {useEffect, useState} from 'react';
import CounterNumber from "./CounterNumber/CounterNumber";
import CounterButton from "./CounterButton/CounterButton";
import SetValue from "./SetValue/SetValue";

export type CounterType = number // 0 |1|2|3|4|5

const Counter = () => {
    let [counter, setCounter] = useState<CounterType>(0)



    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }, [counter])

    useEffect(() => {
        let newValue = localStorage.getItem("counterValue")
        if (newValue) {
            let newNumberCounter = JSON.parse(newValue)
            setCounter(newNumberCounter)
        }
    }, [])


    const inc = () => {
        setCounter(counter + 1)


    }
    const reset = () => {
        setCounter(counter = 0)
    }

    /*    const setLocalStorage = () => {
              localStorage.setItem("counterValue", JSON.stringify(counter))
          }*/

    /*      const getLocalStorage = () => {
             let newValue = localStorage.getItem("counterValue")
              if(newValue) {
                  let newNumberCounter = JSON.parse(newValue)
                  setCounter(newNumberCounter)
              }

          }

          const clearLocalStorage = () => {
              localStorage.clear()
              setCounter(0)

          }*/


    return (
        <div>

            <CounterNumber counter={counter}/>

            <CounterButton
                counter={counter}
                inc={inc}
                reset={reset}
            />


            {/*         <SetValue
                setLocalStorage={setLocalStorage}
                getLocalStorage={getLocalStorage}
                clearLocalStorage={clearLocalStorage}
            />*/}
        </div>
    );
};

export default Counter;
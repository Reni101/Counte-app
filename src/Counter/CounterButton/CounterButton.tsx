import React from 'react';

type CounterButtonPropsType = {
    inc: () => void
    reset: () => void
    counter: number
}

const CounterButton = (props: CounterButtonPropsType) => {
    const onClickIncHandler = () => {
        props.inc()
    }
    const onClickResetHandler = () => {
        props.reset()
    }

    return (
        <div className={"ButtonBox"}>
            <button onClick={onClickIncHandler}
                    disabled={props.counter > 4}
                    className={"inc"}>inc
            </button>


            <button onClick={onClickResetHandler}
                    className={"reset"}
                    disabled={props.counter === 0}


            >reset
            </button>
        </div>
    );
};

export default CounterButton;
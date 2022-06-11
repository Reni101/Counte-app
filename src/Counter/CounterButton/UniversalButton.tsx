import React from 'react';


type CounterButtonPropsType = {
    title: string
    callback: () => void
    Disable: boolean
}

const UniversalButton = (props: CounterButtonPropsType) => {


    return (
        <div>
            <button onClick={props.callback}
                    className={"UnButton"}
                    disabled={props.Disable}
            >
                {props.title}
            </button>


        </div>
    );
};

export default UniversalButton;
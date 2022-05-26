import React from 'react';
import s from './SetValue.module.css'

type SetValuePropsType ={
    setLocalStorage:()=>void
    getLocalStorage: ()=>void
    clearLocalStorage: ()=>void
}

const SetValue = (props:SetValuePropsType) => {
    return (
        <div className={s.mainbox}>
            <button onClick={()=>{props.setLocalStorage()}}>set</button>
            <button onClick={()=>{props.getLocalStorage()}}>get</button>
            <button onClick={()=>{props.clearLocalStorage()}}>clear</button>
        </div>
    );
};

export default SetValue;
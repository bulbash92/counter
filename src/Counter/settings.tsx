import React, {useState} from 'react';
import {Button} from "./Button/Button";
import Input from "./Input";
import './counter.css'

type PropsType ={
    maxValue: number
    startValue: number
    setCount: (count: number) => void
    changeStartValue: (value:number) => void
    changeMaxValue: (value:number) => void
    newSetEditMode: () => void
    error: boolean
}

const Settings = (props: PropsType) => {
    return (

        <div className='container'>
            <div className='settings-window'>
                <div className='input-container'>
                    <p> max value:</p>
                    <Input error={props.error} callBack={props.changeMaxValue} value={props.maxValue}/>
                </div>
                <div className='input-container'>
                    <p> start value:</p>
                    <Input error={props.error} callBack={props.changeStartValue} value={props.startValue}/>
                </div>
            </div>
            <div className='button-container'>
                <Button disabled={props.error} callBack={props.newSetEditMode} name={'set'}/>
            </div>
        </div>
    );
};

export default Settings;
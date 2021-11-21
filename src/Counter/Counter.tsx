import React from "react";
import './counter.css'
import {Button} from "./Button/Button";
import Window from "./Window";

type CounterType = {
    onInc: () => void
    count: number
    resetCount: () => void
    maxCount: number
    editMode: boolean
    error: boolean
    startValue: number
}


function Counter(props: CounterType) {
    const disabledInc = props.count === props.maxCount
    const disabledRes = props.count === props.startValue


    return (
        <div className='container'>
           <Window error={props.error} editMod={props.editMode} maxCount={props.maxCount} value={props.count}/>
            <div className='button-container'>
                <Button name={'inc'} callBack={props.onInc} disabled={disabledInc}/>
                <Button name={'reset'} callBack={props.resetCount} disabled={disabledRes}/>
            </div>
        </div>
    )
}

export default Counter
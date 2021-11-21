import React from "react";
import './counter.css'
import {Button} from "./Button/Button";
import Window from "./Window";
import {useSelector} from "react-redux";
import {RootReducerType} from "../Redux/store";

type CounterType = {
    onInc: () => void
    resetCount: () => void
    maxCount: number
    error: boolean
    startValue: number
}


function CounterRedux(props: CounterType) {

    const count = useSelector<RootReducerType, number>(state => state.counter.count)
    const editMode = useSelector<RootReducerType, boolean>(state => state.counter.editMode)
    const disabledInc = count === props.maxCount
    const disabledRes = count === props.startValue


    return (
        <div className='container'>
           <Window error={props.error} editMod={editMode} maxCount={props.maxCount} value={count}/>
            <div className='button-container'>
                <Button name={'inc'} callBack={props.onInc} disabled={disabledInc}/>
                <Button name={'reset'} callBack={props.resetCount} disabled={disabledRes}/>
            </div>
        </div>
    )
}

export default CounterRedux
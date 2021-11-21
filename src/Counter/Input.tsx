import React, {ChangeEvent} from 'react';
import './counter.css'

type InputType = {
    value: number
    callBack: (count: number) => void
    error: boolean
}
const Input = (props: InputType) => {

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = +e.currentTarget.value
        props.callBack(newValue)
    }

    const InputClassName = ""
    return (

        <input className={props.error ? 'red' : 'input-number'} value={props.value}
               onChange={onChangeInputValue}
               type={"number"}/>

    );
};

export default Input;
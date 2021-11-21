import React from "react";
import '../counter.css'
type ButtonType ={
    name: string
    callBack?: () => void
    disabled?: boolean
}

export function Button(props: ButtonType) {
    return <button className='button' disabled={props.disabled} onClick={props.callBack}>{props.name}</button>
}
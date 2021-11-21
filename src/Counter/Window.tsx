import React from 'react';
import './counter.css'

type PropsType = {
    value?: number
    maxCount: number
    editMod: boolean
    error: boolean
}

const Window = (props: PropsType) => {
    return (
        props.editMod ?
            <div className={props.value === props.maxCount ? 'red-tablo' : 'tablo'}>{props.value}</div>
            : <div className='settings-window'>{props.error ?
                <p className='error'>Incorrect value</p> : 'enter values and press set '}</div>
    );
};

export default Window;
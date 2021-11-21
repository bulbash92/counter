import React, {useEffect, useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Counter/settings";
import {useDispatch, useSelector} from "react-redux";
import {
    changeEditModeAC,
    changeMaxValueAC,
    changeStartValueAC,
    onIncAC,
    resetCountAC
} from "./Redux/CounterReduсer";
import {RootReducerType} from "./Redux/store";
import SettingsRedux from "./Counter/settingsRedux";
import CounterRedux from "./Counter/CounterRedux";


function AppWithRedux() {
    // const [editMode, setEditMode] = useState<boolean>(true)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [count, setCount] = useState<number>(startValue)
     //const [error, setError] = useState<boolean>(false)

    const startValue = useSelector<RootReducerType, number>(state => state.counter.startValue)
    const maxValue = useSelector<RootReducerType, number>(state => state.counter.maxValue)
    const error = useSelector<RootReducerType, boolean>(state => state.counter.error)
    const dispatch = useDispatch()

    useEffect(() => {
        let startValueString = localStorage.getItem('startValueKey')
        if (startValueString) {
            let newValue = JSON.parse(startValueString)
           // setStartValue(newValue)
            dispatch(changeStartValueAC(newValue))
        }
        let maxValueString = localStorage.getItem('maxValueKey')
        if (maxValueString) {
           // setMaxValue(JSON.parse(maxValueString))
            dispatch(changeMaxValueAC(JSON.parse(maxValueString)))
        }
    }, [])



    const onInc = () => {
        // let newCount = count <= maxValue ? count + 1 : count;
        // setCount(newCount)
        dispatch(onIncAC())
    }

    const resetCount = () => {
       // setCount(startValue)
        dispatch(resetCountAC())
    }

    const changeMaxValue = (value: number) => {
    //     if (value <= startValue) {
    //         setError(true)
    //         setEditMode(false)
    //         setMaxValue(value)
    //     } else {
    //         setEditMode(false)
    //         setMaxValue(value)
    //         setError(false)
    //     }
        dispatch(changeMaxValueAC(value))
     }


    const changeStartValue = (value: number) => {
        // if (value < 0 || value >= maxValue) {
        //     setError(true)
        //     setEditMode(false)
        //     setStartValue(value)
        // } else {
        //     setEditMode(false)
        //     setStartValue(value)
        //     setError(false)
        // }
        dispatch(changeStartValueAC(value))

    }

    const editModeCallback = () => {
        resetCount()
       // setEditMode(true)
        dispatch(changeEditModeAC())
        localStorage.setItem('startValueKey', JSON.stringify(startValue))
        localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
    }

    return (
        <div className="App">
            <SettingsRedux
                error={error}
                editModeCallback={editModeCallback}
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
            />
            <CounterRedux
                error={error}
                //editMode={editMode}
                maxCount={maxValue}
                startValue={startValue}
                onInc={onInc}
               // count={count}
                resetCount={resetCount}
            />
        </div>
    );
}

export default AppWithRedux;

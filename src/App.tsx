import React, {useEffect, useState} from 'react';

import './App.css';
import Counter from "./Counter/Counter";
import Settings from "./Counter/settings";


function App() {
    const [editMode, setEditMode] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [count, setCount] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        let startValueString = localStorage.getItem('startValueKey')
        if (startValueString) {
            let newValue = JSON.parse(startValueString)
            setStartValue(newValue)
        }
        let maxValueString = localStorage.getItem('maxValueKey')
        if (maxValueString) {
            setMaxValue(JSON.parse(maxValueString))
        }
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('startValueKey', JSON.stringify(startValue))
    //     localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
    // }, [startValue, maxValue])


    const onInc = () => {
        let newCount = count <= maxValue ? count + 1 : count;
        setCount(newCount)
    }

    const resetCount = () => {
        setCount(startValue)
    }

    const changeMaxValue = (value: number) => {
        if (value <= startValue) {
            setError(true)
            setEditMode(false)
            setMaxValue(value)
        } else {
            setEditMode(false)
            setMaxValue(value)
            setError(false)
        }
    }

    const changeStartValue = (value: number) => {
        if (value < 0 || value >= maxValue) {
            setError(true)
            setEditMode(false)
            setStartValue(value)
        } else {
            setEditMode(false)
            setStartValue(value)
            setError(false)
        }

    }

    const newSetEditMode = () => {
        resetCount()
        setEditMode(true)
        localStorage.setItem('startValueKey', JSON.stringify(startValue))
        localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
    }

    return (
        <div className="App">
            <Settings
                error={error}
                newSetEditMode={newSetEditMode}
                maxValue={maxValue}
                startValue={startValue}
                setCount={setCount}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
            />
            <Counter
                error={error}
                editMode={editMode}
                maxCount={maxValue}
                startValue={startValue}
                onInc={onInc}
                count={count}
                resetCount={resetCount}
            />
        </div>
    );
}

export default App;

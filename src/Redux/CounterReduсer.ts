export type InitialStateType = {
    editMode: boolean
    maxValue: number
    startValue: number
    count: number
    error: boolean
}
const initialState: InitialStateType = {
    editMode: true, maxValue: 5, startValue: 1, count: 0, error: false
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ON-INC':
            let newCount = state.count <= state.maxValue - 1 ? state.count + 1 : state.count;
            return {
                ...state,
                count: newCount,
            }
        case 'RESET-COUNT':
            return {
                ...state,
                count: state.startValue,
            }
        case 'CHANGE-MAX-VALUE':
            if (action.value <= state.startValue) {
                return {
                    ...state,
                    error: true,
                    editMode: false,
                    maxValue: action.value
                }
            } else {
                return {
                    ...state,
                    error: false,
                    editMode: false,
                    maxValue: action.value
                }
            }
        case 'CHANGE-START-VALUE':
            if(action.value < 0 || action.value >= state.maxValue) {
                return {
                    ...state,
                    error: true,
                    editMode: false,
                    startValue: action.value
                }
            } else {
                return {
                    ...state,
                    error: false,
                    startValue: action.value,
                    editMode: false
                }
            }
        case 'CHANGE-EDIT-MODE':
            return {
                ...state,
                editMode: true,
            }

        default:
            return state
    }

}

export type ActionsType = ReturnType<typeof onIncAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeEditModeAC>

export const onIncAC = () => {
    return {
        type: 'ON-INC'
    } as const
}
export const changeEditModeAC = () => {
    return {
        type: 'CHANGE-EDIT-MODE'
    } as const
}
export const resetCountAC = () => {
    return {
        type: 'RESET-COUNT'
    } as const
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        value,

    } as const
}
export const changeStartValueAC = (value: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        value,

    } as const
}
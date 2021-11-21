
export type InitialStateType = {
    editMode: boolean
    maxValue: number
    startValue: number
    count: number
    error: boolean
}
const initialState:InitialStateType = {
        editMode: true, maxValue: 5, startValue: 1, count: 0, error: false
     }

export const counterReducer = (state: InitialStateType =initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ON-INC':
            let newCount = state.count <= state.maxValue ? state.count + 1 : state.count;
            console.log(newCount)
            return newCount
        case 'RESET-COUNT':
            return state.startValue
        default: return state
    }

}

export type ActionsType = ReturnType<typeof onIncAC>| ReturnType<typeof resetCountAC>

export const onIncAC = () => {
    return {
        type: 'ON-INC'
    } as const
}
export const resetCountAC = () => {
    return {
        type: 'RESET-COUNT'
    } as const
}
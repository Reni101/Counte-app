type AllActions =
    | ReturnType<typeof changeStartValueAC>
    | ReturnType<typeof changeMaxValueAC>
    | ReturnType<typeof changeSettingAC>
    | ReturnType<typeof changeCurrentValueAC>


export type initValueState = {
    currentValuer: number
    startValue: number
    maxValue: number
    isSetting: boolean
}

const initialState: initValueState = {
    currentValuer: 0,
    startValue: 0,
    maxValue: 2,
    isSetting: true,
}
export const valueReducer = (state = initialState, action: AllActions) => {
    switch (action.type) {
        case 'CHANGE-START-VALUE':
            return {...state, startValue: action.startValue,currentValuer:action.startValue}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'CHANGE-SETTING':
            return {...state, isSetting: action.isSetting}
        case "CHANGE-CURRENT-VALUE":
            return {...state, currentValuer: action.value}
        default:
            return state
    }
};

export const changeStartValueAC = (startValue: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        startValue
    } as const

}
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        maxValue
    } as const
}

export const changeSettingAC = (isSetting: boolean) => {
    return {
        type: 'CHANGE-SETTING',
        isSetting
    } as const
}
export const changeCurrentValueAC = (value: number) => {
    return {
        type: 'CHANGE-CURRENT-VALUE',
        value
    } as const
}

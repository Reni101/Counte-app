type changeStartValyeActionType = ReturnType<typeof changeStartValueAC>
type changeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
type changeSettingActionType = ReturnType<typeof changeSettingAC>

type AllActions = changeStartValyeActionType
    | changeMaxValueActionType
    |changeSettingActionType


type initialState = {
    startValue: number
    maxValue: number
    isSetting:boolean
}

const initialState: initialState = {
    startValue: 0,
    maxValue: 2,
    isSetting:true,
}
export const ValueReducer = (state =initialState, action: AllActions): initialState => {

    switch (action.type) {
        case 'CHANGE-START-VALUE': {
            return {
                ...state, startValue: action.startValue
            }


        }
        case 'CHANGE-MAX-VALUE': {
            return {
                ...state, maxValue: action.maxValue
            }
        }
        case 'CHANGE-SETTING': {
            return {
                ...state, isSetting:action.isSetting
            }
        }
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
export const changeMaxValueAC = (maxValue: number) =>
{
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

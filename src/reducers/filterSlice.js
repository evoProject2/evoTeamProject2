import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    inputValue: '',
    show: false,
    needFilterFlag: false,
    filters: [],
    sorting: {
        type: 'disabled',
        direction: 'ascending'
    },
    languages: {}
}

export const filterSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue: (state, newValue) => {
            state.inputValue = newValue.payload
        },
        showFiltersToggle: (state) => {
            state.show = !state.show
        },
        setSortingDirection: (state, direction) => {
            state.sorting.direction = direction.payload
        },
        setSortingType: (state, type) => {
            state.sorting.type = type.payload
        },
        setNeedFilterFlag: (state, flag) => {
            state.needFilterFlag = flag.payload
        },
        setLanguages: (state, languages) => {
            state.languages = languages.payload
        },
        toggleSelectedLanguage: (state, languageName) => {
            state.languages[languageName.payload].selected = !state.languages[languageName.payload].selected
        }
    }
})

export const {
    setInputValue,
    setSortingType,
    setSortingDirection,
    showFiltersToggle,
    setNeedFilterFlag,
    setLanguages,
    toggleSelectedLanguage,
} = filterSlice.actions
export default filterSlice.reducer
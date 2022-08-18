import {createSlice} from '@reduxjs/toolkit'
import {FILTER} from "../components/FilterBar/filterConstants";
import {filterRepos} from "../components/FilterBar/filterFunctions";

const initialState = {
    inputValue: '',
    show: false,
    needFilterFlag: false,
    filters: [],
    sorting: {
        type: 'none',
        direction: 'ascending'
    },
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
        }


    }
})

export const {
    setInputValue,
    setSortingType,
    setSortingDirection,
    showFiltersToggle,
    setNeedFilterFlag,
} = filterSlice.actions
export default filterSlice.reducer
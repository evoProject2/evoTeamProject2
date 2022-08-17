import { createSlice } from '@reduxjs/toolkit'
import {FILTER} from "../components/FilterBar/filterConstants";

const initialState = {
    inputValue: '',
    filterToggle: false,
    filters: [],
    sorting: {
        sortingType: FILTER.sortBy.name,
        sortingDirection: FILTER.directions.ascending
    },
    sortingType: FILTER.sortBy.name
}

export const filterSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue:  (state, newValue) => {
            state.inputValue = newValue.payload
        },
        setFilterToggleTo: (state, value) => {
            state.filterToggle = value.payload
        },
        toggleFilterToggle: (state) => {
            state.filterToggle = !state.filterToggle
        },
        setDirection: (state, direction) => {
            state.direction = direction.payload
        },
        setSortingType: (state, type) => {
            state.sortingType = type.payload
        }

    }
})

export const { setInputValue, setFilterToggleTo, toggleFilterToggle, setSortingType } = filterSlice.actions
export default filterSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: ''
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInputValue:  (state, newValue) => {
            state.value = newValue
        }
    }
})

export const { setInputValue } = inputSlice.actions
export default inputSlice.reducer
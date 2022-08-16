import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'bociasan'
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reduders: {
        setInputValue:  (state, newValue) => {
            state.value = newValue
        }
    }
})

export const { setInputValue } = inputSlice.actions
export default inputSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colors: {}
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        setGithubColors: (state, colors) => {
            state.colors = colors.payload
        }
    }
})

export const { setGithubColors } = githubSlice.actions
export default githubSlice.reducer
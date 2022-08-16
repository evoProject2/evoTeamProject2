import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    repositories: [],
    rawDataFetched: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRepositories: (state, repos) => {
            state.repositories = repos.payload
        },
        setUsername: (state, newName) => {
            state.username = newName.payload
        },
        setRawDataFetched: (state, data) => {
            state.rawDataFetched = data.payload
        }
    }
})

export const { setRepositories, setUsername, setRawDataFetched } = userSlice.actions
export default userSlice.reducer
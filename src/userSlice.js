import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    repositories: []
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
        }
    }
})

export const { setRepositories, setUsername } = userSlice.actions
export default userSlice.reducer
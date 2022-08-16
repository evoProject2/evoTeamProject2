import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: 'bociasan',
    repositories: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reduders: {
        setRepositories: (state, repos) => {
            state.repositories = repos
        },
        setUsername: (state, newName) => {
            state.username = newName
        }
    }
})

export const { setRepositories, setUsername } = userSlice.actions
export default userSlice.reducer
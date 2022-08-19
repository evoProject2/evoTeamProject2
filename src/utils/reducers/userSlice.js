import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    username: '',
    repositories: [],
    filteredRepositories: [],
    userAbout: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRepositories: (state, repos) => {
            state.repositories = repos.payload
        },
        setFilteredRepositories: (state, repos) => {
            state.filteredRepositories = repos.payload
        },
        setUsername: (state, newName) => {
            state.username = newName.payload
        },
        setUserAbout: (state, data) => {
            state.userAbout = data.payload
        },
    }
})

export const {
    setRepositories,
    setUsername,
    setUserAbout,
    setFilteredRepositories,
} = userSlice.actions
export default userSlice.reducer
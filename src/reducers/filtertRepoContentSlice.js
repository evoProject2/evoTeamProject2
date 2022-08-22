import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
};

const filterRepoContentSlice = createSlice({
  name: "filterRepoContent",
  initialState,
  reducers: {
    filterByFolders(state) {
      state.sortBy = "Folders";
    },
    filterByFiles(state) {
      state.sortBy = "Files";
    },
  },
});

export const filterRepoContentActions = filterRepoContentSlice.actions;
export default filterRepoContentSlice.reducer;

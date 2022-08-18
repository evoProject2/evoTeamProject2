import { createSlice } from "@reduxjs/toolkit";
import { FILTER } from "../components/FilterBar/filterConstants";
import { filterRepos } from "../components/FilterBar/filterFunctions";

const initialState = {
<<<<<<< HEAD
  inputValue: "",
  show: false,
  filterToggle: false,
  needFilterFlag: false,
  filters: [],
  sorting: {
    type: FILTER.sortBy.none,
    direction: FILTER.directions.ascending,
  },
};

export const filterSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, newValue) => {
      state.inputValue = newValue.payload;
    },
    setFilterToggleTo: (state, value) => {
      state.filterToggle = value.payload;
    },
    toggleFilterToggle: (state) => {
      state.filterToggle = !state.filterToggle;
    },
    showFiltersToggle: (state) => {
      state.show = !state.show;
    },
    setSortingDirection: (state, direction) => {
      state.sorting.direction = direction.payload;
    },
    setSortingType: (state, type) => {
      state.sorting.type = type.payload;
    },
    setNeedFilterFlag: (state, flag) => {
      state.needFilterFlag = flag.payload;
    },
  },
});

export const {
  setInputValue,
  setFilterToggleTo,
  toggleFilterToggle,
  setSortingType,
  setSortingDirection,
  showFiltersToggle,
  setNeedFilterFlag,
} = filterSlice.actions;
export default filterSlice.reducer;
=======
    inputValue: '',
    show: false,
    needFilterFlag: false,
    filters: [],
    sorting: {
        type: 'disabled',
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
>>>>>>> 5ef939394058e8936a44ecebe27dc4762061bd4d

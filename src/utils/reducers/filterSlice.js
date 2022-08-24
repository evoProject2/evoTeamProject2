import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    inputValue: "",
    show: false,
    needFilterFlag: false,
    filters: [],
    sorting: {
        type: "disabled",
        direction: "ascending",
        directionSwitch: true
    },
    languages: {},
};

export const filterSlice = createSlice({
        name: "input",
        initialState,
        reducers: {
            setInputValue: (state, newValue) => {
                state.inputValue = newValue.payload;
                state.needFilterFlag = true
            },
            showFiltersToggle: (state) => {
                state.show = !state.show;
            },
            showFiltersSet: (state, flag) => {
                state.show = flag.payload;
            },
            setSortingDirection: (state, direction) => {
                state.sorting.direction = direction.payload;
                if (direction.payload === 'ascending') {
                    state.sorting.directionSwitch = true
                } else if (direction.payload === 'descending') {
                    state.sorting.directionSwitch = false
                }
            },
            toggleDirectionSwitch: (state) => {
                if (state.sorting.directionSwitch) {
                    state.sorting.direction = 'descending'
                    state.sorting.directionSwitch = false
                } else {
                    state.sorting.direction = 'ascending'
                    state.sorting.directionSwitch = true
                }
            },
            setSortingType: (state, type) => {
                state.sorting.type = type.payload;
            },
            setNeedFilterFlag: (state, flag) => {
                state.needFilterFlag = flag.payload;
            },
            setLanguages: (state, languages) => {
                state.languages = languages.payload;
            },
            toggleSelectedLanguage: (state, languageName) => {
                state.languages[languageName.payload].selected =
                    !state.languages[languageName.payload].selected;
            },
            resetFilters: (state) => {
                state.sorting = initialState.sorting;
                Object.keys(state.languages).forEach(
                    (lang) => (state.languages[lang].selected = false)
                );
                state.needFilterFlag = true
            },
        },
    })
;

export const {
    setInputValue,
    setSortingType,
    setSortingDirection,
    toggleDirectionSwitch,
    showFiltersToggle,
    setNeedFilterFlag,
    setLanguages,
    toggleSelectedLanguage,
    resetFilters,
    showFiltersSet
} = filterSlice.actions;
export default filterSlice.reducer;

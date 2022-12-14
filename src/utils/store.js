import { combineReducers, createStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import filterReducer from "./reducers/filterSlice";
import githubReducer from "./reducers/githubSlice";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("githubRepoViewer", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStorage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("githubRepoViewer");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const store = createStore(
  combineReducers({
    user: userReducer,
    filter: filterReducer,
    github: githubReducer,
  }),
  loadFromLocalStorage()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

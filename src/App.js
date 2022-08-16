import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import IntroPage from "./components/IntroPage/IntroPage";
import UserRepositoriesPage from "./components/UserRepositoriesPage/UserRepositoriesPage";
import {setUsername} from './userSlice'
import {setInputValue} from './inputSlice'


function App() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // useEffect(()=> {
    //     // console.log(user.username)
    //     //
    //     // dispatch(setInputValue('123'))
    //     // dispatch(setUsername('bociasan'))
    //
    //     // console.log(Object.keys(dispatch))
    // }, [])

    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/:username" element={<UserRepositoriesPage />}  />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;

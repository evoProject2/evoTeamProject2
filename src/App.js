import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import './App.css';
import IntroPage from "./components/IntroPage/IntroPage";
import UserRepositoriesPage from "./components/UserRepositoriesPage/UserRepositoriesPage";



function App() {
    const [username, setUsername] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroPage setUsername={setUsername}/>} />
            <Route path="/:username" element={<UserRepositoriesPage username={username}/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

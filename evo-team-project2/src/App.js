import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import IntroPage from "./components/IntroPage/IntroPage";
import UserRepositoriesPage from "./components/UserRepositoriesPage/UserRepositoriesPage";

function App() {
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

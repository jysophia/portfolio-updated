import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import Resume from "./Resume";
import AppBar from "./AppBar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppBar />}></Route>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

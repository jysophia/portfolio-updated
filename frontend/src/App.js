import './App.css';
import * as React from 'react';
// import {Route, BrowserRouter, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import Resume from "./Resume";
import AppBar from "./AppBar";
import PortfolioContainer from "./PortfolioContainer";

function App() {
  return (
    <div className="App">
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/" element={<AppBar />}></Route>*/}
        {/*        <Route path="/" element={<LandingPage />}></Route>*/}
        {/*        <Route path="/resume" element={<Resume />}></Route>*/}
        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
        <PortfolioContainer />
    </div>
  );
}

export default App;

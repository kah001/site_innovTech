import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingPage";

export default function Navegacao() {
    return (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    )
}
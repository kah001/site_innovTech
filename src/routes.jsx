import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingPage";
import SobreNos from "./pages/sobreNos";
import AreasAtuacao from "./pages/areasAtuacao";
import NaoEncontrado from "./pages/naoEncontrado";

export default function Navegacao() {
    return (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/sobre" element={<SobreNos/>}></Route>
                <Route path="/areas" element={<AreasAtuacao/>}></Route>

                <Route path="*" element={<NaoEncontrado/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    )
}
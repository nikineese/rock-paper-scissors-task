import { GamePage } from './game'
import {AuthPage} from "./auth";
import {Route, Routes} from "react-router-dom";
import React from "react";
export const Pages = () => (
    <Routes>
        <Route path='/' element={<AuthPage/>} />
        <Route path='/game' element={<GamePage/>} />
    </Routes>
)
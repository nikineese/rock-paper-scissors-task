import React from 'react';
import './application.css';
import {Pages} from "../pages";
import {BrowserRouter} from "react-router-dom";

function Application() {
  return <BrowserRouter><Pages/></BrowserRouter>
}

export default Application;

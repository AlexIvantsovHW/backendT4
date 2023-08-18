import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from './Component/Table/TableContainer.js';
import Header from "./Component/header/Header";
import { Routes, Route } from "react-router-dom";
import RegistationContainer from './Component/Registration/RegistationContainer';
import React from "react";
import LoginContainer from "./Component/Login/LoginContainer.js";

class App extends React.Component {

  render(){
    return (
      <div>
        <div className="container">
        <Header/>
          <div className="body">
            <Routes>
              <Route  exact path="/" element={<TableContainer/>} />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/registration" element={<RegistationContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    );}
}
export default (App);

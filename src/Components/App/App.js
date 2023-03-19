import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import List from "../List/List";
import Picture from "../Picture/Picture";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Single Page Navigation</h1>
                    <ul className="header">
                        <li><NavLink to="/">Welcome</NavLink></li> | 
                        <li><NavLink to="/list">List</NavLink></li> |
                        <li><NavLink to="/picture">Picture</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Welcome />}/>
                        <Route path="/list" element={<List />}/>
                        <Route path="/picture" element={<Picture />}/>
                    </Routes>
                </div>
            </HashRouter>
        )
    }
}

export default App;
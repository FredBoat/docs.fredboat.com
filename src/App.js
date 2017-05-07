import React, { Component } from 'react';
import "./css/App.css";
import logo from "../public/logo.svg";
import Markdown from "./Markdown";
import Toc from "./Toc";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="Logo" draggable="false"/>
                    <div className="logo-text">FredBoat</div>
                </div>

                <div className="page-body">
                    <Toc/>

                    <Markdown name={this.props.page}/>
                </div>
            </div>
        )
    }
}

export default App;
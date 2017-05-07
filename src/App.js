import React, { Component } from 'react';
import "./css/App.css";
import logo from "../public/logo.svg";
import Markdown from "./Markdown";
import TocHeader from "./TocHeader";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="Logo"/>
                    <div className="logo-text">FredBoat</div>
                </div>

                <div className="page-body">
                    <div className="table-of-contents">
                        <div className="toc-title">
                            Contents
                        </div>
                        <TocHeader page="index" name="Quickstart"/>
                        <TocHeader page="faq" name="FAQ"/>
                        <TocHeader page="terms" name="Terms of Service"/>
                        <TocHeader page="selfhosting" name="Selfhosting"/>
                        <TocHeader page="systemdservice" name="Selfhosting (systemd)"/>
                    </div>

                    <Markdown name={this.props.page}/>
                </div>
            </div>
        )
    }
}

export default App;
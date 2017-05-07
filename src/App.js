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
                        <TocHeader activePage={this.props.page} page="index" name="Quickstart"/>
                        <TocHeader activePage={this.props.page} page="faq" name="FAQ"/>
                        <TocHeader activePage={this.props.page} page="terms" name="Terms of Service"/>
                        <TocHeader activePage={this.props.page} page="selfhosting" name="Selfhosting"/>
                        <TocHeader activePage={this.props.page} page="systemdservice" name="Selfhosting (systemd)"/>
                    </div>

                    <Markdown name={this.props.page}/>
                </div>
            </div>
        )
    }
}

export default App;
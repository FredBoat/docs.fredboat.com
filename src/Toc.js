import React, { Component } from 'react';
import "./css/Toc.css";
import TocHeader from "./TocHeader";

class Toc extends Component {
    render() {
        return (
            <div className="Toc">
                <div className="toc-title">
                    Contents
                </div>
                <TocHeader activePage={this.props.page} page="index" name="Quickstart"/>
                <TocHeader activePage={this.props.page} page="music" name="Music commands"/>
                <TocHeader activePage={this.props.page} page="non_music" name="Other commands"/>
                <TocHeader activePage={this.props.page} page="faq" name="FAQ"/>
                <TocHeader activePage={this.props.page} page="terms" name="Terms of Service"/>

                <div className="toc-separator"/>
                <h2>Advanced</h2>

                <TocHeader activePage={this.props.page} page="selfhosting" name="Selfhosting"/>
                <TocHeader activePage={this.props.page} page="systemdservice" name="Selfhosting (systemd)"/>
            </div>
        )
    }
}

export default Toc;
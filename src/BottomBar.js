import React, { Component } from 'react';
import "./css/BottomBar.css";
import BottomBarButton from "./BottomBarButton";

class BottomBar extends Component {
    render() {
        return (
            <div className="BottomBar">
                <BottomBarButton activePage={this.props.page} page="index" name="Quickstart"/>
                <BottomBarButton activePage={this.props.page} page="non_music" name="Other commands"/>
                <BottomBarButton activePage={this.props.page} page="faq" name="FAQ"/>
                <BottomBarButton activePage={this.props.page} page="terms" name="Terms of Service"/>
                <BottomBarButton activePage={this.props.page} page="selfhosting" name="Selfhosting"/>
                <BottomBarButton activePage={this.props.page} page="systemdservice" name="Selfhosting (systemd)"/>
            </div>
        )
    }
}

export default BottomBar;
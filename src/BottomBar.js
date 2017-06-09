import React, { Component } from 'react';
import "./css/BottomBar.css";
import BottomBarButton from "./BottomBarButton";

class BottomBar extends Component {
    render() {
        return (
            <div className="BottomBar">
                <BottomBarButton activePage={this.props.page} icon="music" page="index" name="Quickstart"/>
                <BottomBarButton activePage={this.props.page} icon="money" page="donate" name="Donate"/>
                <BottomBarButton activePage={this.props.page} icon="cog" page="configuration" name="Configuration"/>
                <BottomBarButton activePage={this.props.page} icon="ellipsis-h" page="non_music" name="Other commands"/>
                <BottomBarButton activePage={this.props.page} icon="question" page="faq" name="FAQ"/>
                <BottomBarButton activePage={this.props.page} icon="legal" page="terms" name="Terms of Service"/>
                <BottomBarButton activePage={this.props.page} icon="terminal" page="selfhosting" name="Selfhosting"/>
                <BottomBarButton activePage={this.props.page} icon="terminal" page="systemdservice" name="Selfhosting (systemd)"/>
            </div>
        )
    }
}

export default BottomBar;
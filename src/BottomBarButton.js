import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class BottomBarButton extends Component {
    render() {
        return (
            <div className={this.props.activePage === this.props.page ? "BottomBarButton active" : "BottomBarButton"}>
                <Link to={"/" + this.props.page}>
                    <FontAwesome name={this.props.icon} size="2x"/>
                    <div>
                        {this.props.name}
                    </div>
                </Link>
            </div>
        )
    }
}

export default BottomBarButton;
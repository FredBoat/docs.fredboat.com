import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "./css/TocHeader.css";

class TocHeader extends Component {
    render() {
        return (
            <div className="TocHeader">
                <Link to={"/" + this.props.page}>
                    <h1>
                        {this.props.name}
                    </h1>
                </Link>
            </div>
        )
    }
}

export default TocHeader;
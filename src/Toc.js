import React, { Component } from 'react';
import "./css/Toc.css";
import TocHeader from "./TocHeader";

class Toc extends Component {
    render() {
        return (
            <div className="Toc">
                <div className="toc-inner">
                    <div className="toc-title">
                        Contents
                    </div>
                    <TocHeader activePage={this.props.page} page="index" name="Quickstart"/>
                    <TocHeader activePage={this.props.page} page="configuration" name="Configuration"/>
                    {/*<TocHeader activePage={this.props.page} page="music" name="Music commands"/>*/}
                    <TocHeader activePage={this.props.page} page="non_music" name="Other commands"/>
                    <TocHeader activePage={this.props.page} page="faq" name="FAQ"/>
                    <TocHeader activePage={this.props.page} page="terms" name="Terms of Service"/>

                    <div className="toc-separator"/>
                    <h2>Advanced</h2>

                    <TocHeader activePage={this.props.page} page="selfhosting" name="Selfhosting"/>
                    <TocHeader activePage={this.props.page} page="systemdservice" name="Selfhosting (systemd)"/>
                </div>


                <div id="ad-sidebar">
                    <ins className="adsbygoogle"
                         style={{display: "inline-block", width: "336px", height: "280px"}}
                         data-ad-client="ca-pub-6361371060709028"
                         data-ad-slot="7243035790"
                         data-ad-format="auto"/>
                </div>
            </div>
        )
    }

    //noinspection JSMethodCanBeStatic
    componentDidMount() {
        const script1 = document.createElement("script");

        script1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script1.async = true;

        document.getElementById("ad-sidebar").appendChild(script1);

        const script2 = document.createElement("script");

        script2.innerHTML =
            `(adsbygoogle = window.adsbygoogle || []).push({});`;

        document.getElementById("ad-sidebar").appendChild(script2);
    }
}

export default Toc;
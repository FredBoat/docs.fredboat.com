import React, { Component } from 'react';
import "./css/Toc.css";
import TocHeader from "./TocHeader";
import {Link} from 'react-router-dom'

class Toc extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAdblock: false,
            showsAd: false
        }
    }

    checkAdblock(instance) {
        // http://stackoverflow.com/questions/4869154/how-to-detect-adblock-on-my-website#20505898

        let adBlockEnabled = false;
        const testAd = document.createElement('div');
        testAd.innerHTML = '&nbsp;';
        testAd.className = 'adsbox';
        document.body.appendChild(testAd);
        window.setTimeout(function() {
            if (testAd.offsetHeight === 0) {
                adBlockEnabled = true;
            }
            testAd.remove();

            instance.setState((prevState) =>({
                isAdblock: adBlockEnabled,
                showsAd: prevState.showsAd
            }));
        }, 100);
    }

    render() {
        let ad = null;
        if(this.state.isAdblock) {
            ad = (
                <div id="ad-sidebar">
                    <div className="adblock-notif">
                        <p>I block ads too.</p>
                        <p><Link to="/donate">Donate instead?</Link></p>
                    </div>
                </div>
            );
        } else {
            ad = (
                <div id="ad-sidebar">
                    <ins className="adsbygoogle"
                         style={{display: "inline-block", width: "336px", height: "280px"}}
                         data-ad-client="ca-pub-6361371060709028"
                         data-ad-slot="7243035790"
                         data-ad-format="auto"/>
                    <p className="about-ads">Ads keep FredBoat afloat. <Link to="/donate">Learn more</Link>.</p>
                </div>
            );

            if(!this.state.showsAd)
                this.checkAdblock(this);
        }

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
                {ad}
            </div>
        )
    }

    //noinspection JSMethodCanBeStatic
    componentDidUpdate() {
        if(!this.state.isAdblock && !this.state.showsAd) {
            console.log("Spawned ad");
            const script1 = document.createElement("script");

            script1.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            script1.async = true;

            document.getElementById("ad-sidebar").appendChild(script1);

            const script2 = document.createElement("script");

            script2.innerHTML =
                `(adsbygoogle = window.adsbygoogle || []).push({});`;

            document.getElementById("ad-sidebar").appendChild(script2);

            this.setState((prevState) =>({
                isAdblock: prevState.isAdblock,
                showsAd: true
            }));
        } else if(this.state.isAdblock) {
            window.setTimeout(function () {
                if (document.getElementById("ad-sidebar") !== null) {
                    document.getElementById("ad-sidebar").hidden = undefined;
                    document.getElementById("ad-sidebar").id = "ad-sidebar-blocked"
                }

                if (document.getElementById("ad-sidebar-blocked") !== null) {
                    document.getElementById("ad-sidebar-blocked").hidden = undefined;
                }
            }, 100);
        }
    }
}

export default Toc;
import React, { Component } from 'react';
import "./css/Toc.css";
import TocHeader from "./TocHeader";

class Toc extends Component {

    /*
    checkAdblock(instance) {

         // Carbon is whitelisted
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

    }*/

    render() {
        return (
            <div className="Toc">
                <div className="toc-inner">
                    <div className="toc-title">
                        Contents
                    </div>
                    <TocHeader activePage={this.props.page} page="index" name="Quickstart"/>
                    <TocHeader activePage={this.props.page} page="donate" name="Donate"/>
                    <TocHeader activePage={this.props.page} page="configuration" name="Configuration"/>
                    <TocHeader activePage={this.props.page} page="permissions" name="Permissions"/>
                    {/*<TocHeader activePage={this.props.page} page="music" name="Music commands"/>*/}
                    <TocHeader activePage={this.props.page} page="non_music" name="Other commands"/>
                    <TocHeader activePage={this.props.page} page="faq" name="FAQ"/>
                    <TocHeader activePage={this.props.page} page="terms" name="Terms of Service"/>

                    <div className="toc-separator"/>
                    <h2>Advanced</h2>

                    <TocHeader activePage={this.props.page} page="selfhosting" name="Selfhosting"/>
                    <TocHeader activePage={this.props.page} page="systemdservice" name="Selfhosting (systemd)"/>
                </div>

                <div id="ad-sidebar"/>
            </div>
        )
    }

    //noinspection JSMethodCanBeStatic
    componentDidMount() {
        console.log("Spawned ad");
        const script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = "//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=fredboatcom";
        script.id="_carbonads_js";
        document.getElementById("ad-sidebar").appendChild(script);

    }
}

export default Toc;
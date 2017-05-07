import React, { Component } from 'react';
import "./css/App.css";
import logo from "../public/logo.svg";
import Markdown from "./Markdown";
import Toc from "./Toc";

import discord from "../public/icon/discord.svg";
import patreon from "../public/icon/patreon.png";
import github from "../public/icon/github.png";
import twitter from "../public/icon/twitter.svg";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="Logo" draggable="false"/>
                    <div className="logo-text">FredBoat</div>
                    <div className="header-left">
                    </div>
                    <div className="header-right">
                        <a className="header-button" href="https://discordapp.com/oauth2/authorize?&client_id=184405253028970496&scope=bot">Add to Discord</a>
                        <div className="icons">
                            <a className="discord" href="https://discord.gg/cgPFW4q">
                                <img src={discord} alt="Discord"/>
                            </a>
                            <a className="patreon" href="https://www.patreon.com/fredboat">
                                <img src={patreon} alt="Patreon"/>
                            </a>
                            <a className="twitter" href="https://twitter.com/DiscordFredBoat">
                                <img src={twitter} alt="Twitter"/>
                            </a>
                            <a className="github" href="https://github.com/Frederikam/FredBoat">
                                <img src={github} alt="GitHub"/>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="page-body">
                    <Toc/>

                    <Markdown name={this.props.page}/>
                </div>
            </div>
        )
    }
}

export default App;
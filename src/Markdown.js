import React, { Component } from 'react';
import Loading from 'react-loading-animation';
import marked from 'marked';
import hljs from 'highlight.js';
import logo from "../public/logo.svg";
import "./css/Markdown.css";
import "highlight.js/styles/monokai-sublime.css";

class Markdown extends Component {
    constructor(props) {
        super(props);

        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });

        this.state = {
            loadedMarkdown: null,
            loadedPage: null,
            is404: false
        };

        this.processMarkdown(this);
    }

    processMarkdown(instance) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                instance.setState((prevState) =>({
                    loadedMarkdown: marked(xmlHttp.responseText),
                    loadedPage: instance.props.name,
                    is404: xmlHttp.responseText.toLowerCase().match(/^<!doctype html>/) !== null //Checks if we landed on a 404 page by looking for HTML
                }))
            }
        };
        xmlHttp.open("GET", window.location.origin + "/markdown/" + instance.props.name + ".md", true); // true for asynchronous
        xmlHttp.send(null);
    }

    render() {
        let inner = null;

        if(this.state.is404) {
            inner = (
                <div className="text-404">
                    Error 404 ~ Not found
                </div>
            );
        } else if(this.state.loadedPage !== this.props.name) {
            inner = (
                <div className="Loading">
                    <Loading/>
                </div>
            );

            this.processMarkdown(this);
        } else {
            inner = (
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.loadedMarkdown}}/>
            );
        }

        return (
            <div className="Markdown">
                <div className="mobile-header">
                    <img className="logo" src={logo} alt="Logo" draggable="false"/>
                </div>
                {inner}
            </div>
        )
    }

    componentDidUpdate() {
        const langs = ["yaml"];

        for (let i in langs) {
            const blocks = document.querySelectorAll(".lang-" + langs[i]);

            for (let j = 0; j < blocks.length; j++) {
                blocks[j].className += " " + langs[i];
                hljs.highlightBlock(blocks[j])
            }
        }
    }
}

export default Markdown

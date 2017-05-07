import React, { Component } from 'react';
import Loading from 'react-loading-animation';
import marked from 'marked';
import hljs from 'highlight.js';
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
            loadedPage: null
        };

        this.processMarkdown(this);
    }

    processMarkdown(instance) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                instance.setState((prevState) =>({
                    loadedMarkdown: marked(xmlHttp.responseText),
                    loadedPage: instance.props.name
                }))
            }
        };
        xmlHttp.open("GET", window.location.origin + "/markdown/" + instance.props.name + ".md", true); // true for asynchronous
        xmlHttp.send(null);
    }

    render() {
        let inner = null;

        if(this.state.loadedPage !== this.props.name) {
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
                {inner}
            </div>
        )
    }

    componentDidUpdate() {
        const blocks = document.querySelectorAll(".lang-yaml");

        for (let i = 0; i < blocks.length; i++) {
            console.log(i);
            blocks[i].className += " yaml";
            hljs.highlightBlock(blocks[i])
        }
    }
}

export default Markdown

import React, { Component } from 'react';
import Loading from 'react-loading-animation';
import marked from 'marked';

import "./css/Markdown.css";

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
            loadedMarkdown: null
        };

        const xmlHttp = new XMLHttpRequest();
        let instance = this;
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                instance.setState((prevState) =>({
                    loadedMarkdown: marked(xmlHttp.responseText)
                }))
            }
        };
        xmlHttp.open("GET", window.location.origin + "/markdown/" + props.name + ".md", true); // true for asynchronous
        xmlHttp.send(null)
        //xmlHttp.send(null);
    }

    render() {
        let inner = null;

        if(this.state.loadedMarkdown === null) {
            inner = (
                <div className="Loading">
                    <Loading/>
                </div>
            )
        } else {
            inner = (
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.loadedMarkdown}}/>
            )
        }

        return (
            <div className="Markdown">
                {inner}
            </div>
        )
    }
}

export default Markdown

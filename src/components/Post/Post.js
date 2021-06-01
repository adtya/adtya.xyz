import React from 'react';
import ReactMarkdown from "react-markdown";

import NoMatch from "../NoMatch/NoMatch";
import styles from './post.module.css'
import fetchPosts from "../Posts/FetchPosts";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: fetchPosts().filter(post => post.data.title.replace(/[^a-zA-Z0-9]/, '-') === props.match.params.postId)[0],
        }
    }

    componentDidMount() {
        if (this.state.post)
            document.title = `${this.state.post.data.title} | adtya.xyz`;
    }

    render() {
        if (this.state.post === undefined)
            return (<NoMatch/>)
        else {
            return (
                <main>
                    <h1 className={styles.postTitle}>{this.state.post.data.title}</h1>
                    <span className={styles.date}>{this.state.post.data.date}</span>
                    <ReactMarkdown>{this.state.post.content}</ReactMarkdown>
                </main>
            )
        }
    }
}

export default Post;
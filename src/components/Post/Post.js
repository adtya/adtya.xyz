import React from 'react';
import ReactMarkdown from "react-markdown";

import NoMatch from "../NoMatch/NoMatch";
import styles from './post.module.css'
import fetchPosts from "../Posts/FetchPosts";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: fetchPosts(),
            postId: props.match.params.postId
        }
    }

    render() {
        const post = this.state.posts.filter(post => post.data.title.replace(/\s/g, '') === this.state.postId)[0];
        return post === undefined
            ? (
                <NoMatch/>
            )
            : (
                <main>
                    <h2 className={styles.postTitle}>{post.data.title}</h2>
                    <span className={styles.date}>{post.data.date}</span>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </main>
            )


    }
}

export default Post;
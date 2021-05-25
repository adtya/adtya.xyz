import React from 'react';
import ReactMarkdown from "react-markdown";

import styles from './post.module.css'

import fetchPosts from "../Posts/FetchPosts";

class Post extends React.Component {
    render() {
        const postId = this.props.match.params.postId;
        const post = fetchPosts().filter(post => post.data.title.replace(/\s/g, '') === postId)[0];
        return (
            <main>
                <h2 className={styles.postTitle}>{post.data.title}</h2>
                <span className={styles.date}>{post.data.date}</span>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </main>
        );
    }
}

export default Post;
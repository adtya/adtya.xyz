import React from 'react';
import {Link} from "react-router-dom";

import styles from './post.module.css';

class PostSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post
        }
    }

    render() {
        return (
            <div>
                <Link to={`/posts/${this.state.post.data.title.replace(/[^a-zA-Z0-9]/, '-')}`}>
                    <div>
                        <h3 className={styles.postTitle}>{this.state.post.data.title}</h3>
                        <span className={styles.date}>{this.state.post.data.date}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PostSummary;
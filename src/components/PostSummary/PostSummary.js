import React from 'react';
import {Link} from "react-router-dom";

import styles from './postsummary.module.css';

class PostSummary extends React.Component {
    render() {
        let {post} = this.props;
        return (
            <div>
                <Link to={`/posts/${post.id}`}>
                    <div>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <span className={styles.date}>{post.date}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PostSummary;
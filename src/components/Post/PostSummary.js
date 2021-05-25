import React from 'react';
import {Link} from "react-router-dom";

import styles from './post.module.css';

class PostSummary extends React.Component {
    render() {
        let {post} = this.props;
        return (
            <div>
                <Link to={`/posts/${post.data.title}`.replace(/\s/g, '')}>
                    <div>
                        <h3 className={styles.postTitle}>{post.data.title}</h3>
                        <span className={styles.date}>{post.data.date}</span>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PostSummary;
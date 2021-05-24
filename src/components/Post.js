import React from 'react';

import posts_content from './posts_content.js';

class Post extends React.Component {
    render() {
        const postId = this.props.match.params.postId;
        const post = posts_content.filter(post => post.id === postId)[0];
        return (
            <main>
                <h2 className="post-title">{post.title}</h2>
                <span className="date">{post.date}</span>
                <p className="post-content">
                    {post.content}
                </p>
            </main>
        );
    }
}

export default Post;
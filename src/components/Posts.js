import React from "react";

import PostSummary from "./PostSummary/PostSummary";
import posts_content from './posts_content.js'

class Posts extends React.Component {
    render() {
        return posts_content.length === 0
            ? (
                <main>
                    <h3>Placeholder for something great!!</h3>
                </main>
            )
            : (
                <main>
                    {posts_content.map(post => (
                        <PostSummary key={post.id} post={post}/>
                    ))
                    }
                </main>
            );
    }
}

export default Posts;
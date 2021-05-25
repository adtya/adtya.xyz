import React from "react";

import PostSummary from "../Post/PostSummary";
import fetchPosts from "./FetchPosts";

function Posts() {
    const posts = fetchPosts();
    return posts.length === 0
        ? (
            <h3>Placeholder for something great!!</h3>
        )
        : (
            <div>
                {posts.map(post => (
                    <PostSummary key={post.data.title} post={post}/>
                ))
                }
            </div>
        );
}

export default Posts;
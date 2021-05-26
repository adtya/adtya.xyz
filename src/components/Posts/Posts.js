import React from "react";

import PostSummary from "../Post/PostSummary";
import fetchPosts from "./FetchPosts";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: fetchPosts()
        }
    }

    render() {
        return this.state.posts.length === 0
            ? (
                <h3>Placeholder for something great!!</h3>
            )
            : (
                <div>
                    {this.state.posts.map(post => (
                        <PostSummary key={post.data.title} post={post}/>
                    ))
                    }
                </div>
            );
    }
}

export default Posts;
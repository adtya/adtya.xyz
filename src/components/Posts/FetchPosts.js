import * as matter from 'gray-matter';

import Posts from '../../posts/posts.json'

function fetchPosts() {
    let posts = [];
    Posts.forEach(post => {
        posts.push(matter(post));
    })
    return posts;
}

export default fetchPosts;
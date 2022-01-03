import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {

    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { title, body } = post;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h2>Post detail here: {postId}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;
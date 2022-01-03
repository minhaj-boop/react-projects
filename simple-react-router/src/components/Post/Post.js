import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {

    const { title, id } = props.post;
    const history = useHistory();

    const handleBtnClick = () => {
        history.push(`/post/${id}`);
    }
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>post detail</Link>
            <br />
            <button onClick={handleBtnClick}>Details</button>
        </div>
    );
};

export default Post;
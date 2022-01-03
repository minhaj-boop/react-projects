import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {

    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const { name, phone, company } = friend;
    const history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    const handleBtnClick = () => {
        history.push(`/friends`);
    }

    return (
        <div>
            <h2>Freind detail of: {friendId}</h2>
            <h3>Name: {name}</h3>
            <h4>Phone: {phone}</h4>
            <p>Works at: {company?.name}</p>
            <button onClick={handleBtnClick}>go to friends</button>
        </div>
    );
};

export default FriendDetail;
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { id, name, phone, website, address } = props.friend;
  const history = useHistory();

  const friendStyle = {
    border: '3px solid blue',
    padding: '10px',
    backgroundColor: 'green',
    margin: '10px',
    borderRadius: '10px',
  };

  const handleBtnClick = () => {
    history.push(`/friend/${id}`);
  }

  return (
    <div style={friendStyle}>
      <h2>This is: {name}</h2>
      <h5>Call me: {phone}</h5>
      <p>Website: {website}</p>
      <p><small>{address.city}</small></p>
      <Link to={`/friend/${id}`}>Visit me</Link>
      <br />
      <Link to={`/friend/${id}`}>
        <button>Click me</button>
      </Link>
      <br />
      <button onClick={handleBtnClick}>CLick me 2</button>
    </div>
  );
};

export default Friend;

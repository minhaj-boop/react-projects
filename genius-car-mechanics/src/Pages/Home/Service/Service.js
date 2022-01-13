import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, time, price, description, img } = service;
    return (
        <div className="service pb-3">
            <h2>This is service</h2>
            <img src={img} alt="" />
            <h3>Name: {name.toUpperCase()}</h3>
            <h3>Time: {time}</h3>
            <h3>Price: {price}</h3>
            <p className="px-5">Description: {description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-danger">Book {name.toLowerCase()}</button>
            </Link>
        </div >
    );
};

export default Service;
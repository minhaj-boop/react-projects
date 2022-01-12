import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, time, price, description, img } = service;
    return (
        <div className="service">
            <h2>This is service</h2>
            <img src={img} alt="" />
            <h3>Name: {name.toUpperCase()}</h3>
            <h3>Time: {time}</h3>
            <h3>Price: {price}</h3>
            <p className="px-5">Description: {description}</p>
        </div>
    );
};

export default Service;
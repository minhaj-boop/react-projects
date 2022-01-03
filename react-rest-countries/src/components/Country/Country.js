import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name:{common}, capital, population, flags:{png}} = props.country;
    console.log(props);
    return (
        <div className="country">
            <h2>Name: {common}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <img src={png} alt="" /> 
        </div>
    );
};

export default Country;
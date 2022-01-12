import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, erpertise } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <h2>This is an expert</h2>
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{erpertise}</h5>
        </div>
    );
};

export default Expert;
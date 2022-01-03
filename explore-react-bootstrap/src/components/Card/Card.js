import React from 'react';

const Card = (props) => {
    const {title, description, img} = props.obj;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
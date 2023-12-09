import React from 'react';
import { NavLink } from 'react-router-dom';

const BrandCard = ({brand}) => {
    const {name, image}= brand;
    console.log(brand);
    return (
        <NavLink to={`products/${name}`}>
            
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                </div>
                <figure><img className='h-1/3' src={image} alt="Shoes" /></figure>
            </div>
        </NavLink>
        
    );
};

export default BrandCard;
import React from 'react';

const SingleProductCard = ({product}) => {
    const {_id,image,name,Bname,category,price,descri,rating}= product;
    return (
        
            <div className="brand_product card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-1/2' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{Bname}</p>
                    <p className="text-xl font-semibold">Price : {price}</p>
                    <div className="card-actions justify-end">
                       
                        <button className="btn bg-primaryB text-white">Details</button>
                    </div>
                </div>
            </div>
        
    );
};

export default SingleProductCard;
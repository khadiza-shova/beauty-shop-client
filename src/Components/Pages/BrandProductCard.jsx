import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const BrandProductCard = ({ product }) => {

    const { _id, image, name, Bname, category, price, descri, rating } = product;
    return (
        <div>
            <div className="brand_product card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-1/2' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-[17px]'>{Bname}</p>
                    <p>{category}</p>
                   <div className='flex justify-end'>
                   <p className='text-xl'>Price :{price}</p>
                   <p>{rating}</p>
                     <p>

                    {[...Array({rating})].map((star) => { 
                        console.log(rating);
                        return (<FaStar ></FaStar>);
                    }
                    )}
                    </p> 
                   </div>
                    <div className="card-actions justify-end">
                        <Link to={`productDetails/${_id}`}>
                            <button className="btn text-white bg-primaryB">Details</button>
                        </Link>
                        <Link to={`update/${_id}`}>
                            <button className="btn bg-primaryB text-white">Update</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProductCard;
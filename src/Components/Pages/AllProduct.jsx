import React, { useEffect, useState } from 'react';
import SingleProductCard from './SingleProductCard';

const AllProduct = () => {

    const [proudcts,setProducts]=useState([]);
    console.log(proudcts);

    useEffect(()=>{
        fetch("https://beaufly-shop-server.vercel.app/products")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
        })
    },[])
    return (
        <div className='my-24'>
            <h2 className='text-center text-2xl font-semibold '>Latest Product:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                proudcts.map(productSingle=><SingleProductCard product={productSingle}></SingleProductCard>)
            }

            </div>
            
        </div>
    );
};

export default AllProduct;
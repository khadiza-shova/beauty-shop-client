import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard';

const Brands = () => {

    const [brands,setBrands]= useState([]);
    
    useEffect(()=>{
        fetch("https://beaufly-shop-server.vercel.app/brands")
        .then(res=>res.json())
        .then(data=>{
            setBrands(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Popular Brands</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-10'>
            
            {
                brands.map((brand)=><BrandCard key={brand.id} brand={brand}></BrandCard>)
             }
                
            </div>
        </div>
    );
};

export default Brands;
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';

const MyCart = () => {

   const cartData = useLoaderData();
   const [carts,setCarts]=useState(cartData);


    return (
        <div className='w-10/12 mx-auto'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            {
                carts.map(cart=><CartCard key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></CartCard>)
            }
            </div>
        </div>
    );
};

export default MyCart;
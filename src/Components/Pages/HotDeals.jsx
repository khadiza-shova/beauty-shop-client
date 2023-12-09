import React, { useEffect, useState } from 'react';

const HotDeals = () => {
    const [hotDeals, setHotDeals] = useState([]);

    useEffect(() => {
        fetch("https://beaufly-shop-server.vercel.app/hotDeals")
            .then(res => res.json())
            .then(data => {
                setHotDeals(data)
            })
    }, [])
    console.log(hotDeals);
    return (
        <div className='my-24'>
            <h2 className='text-center text-2xl font-semibold'>Hot Deals</h2>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
                hotDeals.map(hotDeal =>
                    
                        <div className='shadow mt-10 hover:shadow-black'>
                            <img src={hotDeal.image} alt="Shoes" />
                        </div>
                    
                )
            }

            </div>
        </div>
    );
};

export default HotDeals;
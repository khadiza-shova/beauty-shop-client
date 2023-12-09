import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandProductCard from './BrandProductCard';

const BrandProduct = () => {


    const params = useParams();
    console.log(params);

    const [brandProduct, setBrandProduct] = useState([]);

    useEffect(() => {
        fetch(`https://beaufly-shop-server.vercel.app/products/${params.brandName}`)
            .then(res => res.json())
            .then(data => {
                setBrandProduct(data);
            })
    }
        , []);

    console.log("Brand Product ",brandProduct);

    return (
        <div className='w-10/12 mx-auto'>
            
            {
                brandProduct?.length > 0 ? <div><h2 className="text-center text-2xl font-semibold">Brand Product </h2>
         
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        brandProduct.map(Pro => <BrandProductCard product={Pro}></BrandProductCard>)
                    }
    
                </div>
                </div>:
                <div >
                    <img className="w-1/3 mt-10 mx-auto" src="https://i.ibb.co/5BYfX7j/images-q-tbn-ANd9-Gc-RHZYOCKt-TApky9-Iy2-Cvp-Nud8-Jjjr-Cv7-Yd563-TOXv-Kcn-Fk-K5gz-Pea-k-B5h3r-Srn8-W.png" alt="" />
                    </div>
            }


            
        </div>
    );
};

export default BrandProduct;
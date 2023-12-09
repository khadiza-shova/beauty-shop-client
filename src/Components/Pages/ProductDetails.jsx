import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvides';

const ProductDetails = () => {

    const {user}= useContext(AuthContext);
    const productDe = useLoaderData();
    const {_id,image,name,Bname,category,price,descri,rating}= productDe;
   
    console.log(Bname);

    const handleCart=(id)=>{

        const userEmail = user.email;
        const cartId = {id,image,name,Bname,category,price,descri,rating,userEmail}

        console.log(cartId);

        fetch("https://beaufly-shop-server.vercel.app/cart",{

            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(cartId)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire(
                'Good job!',
                '1 new item(s) have been added to your cart !',
                'success'
            )
        })
    }
    return (
        <div className="mt-10">
            
            <div className="card w-[400px] mx-auto card-compact bg-base-100 shadow-xl">
                <figure><img className='w-1/2 h-1/2' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{Bname}</p>
                    <p className='text-xl font-bold'>Price :{price}</p>
                    <p>{descri}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleCart(_id)} className="btn bg-primaryB text-white">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
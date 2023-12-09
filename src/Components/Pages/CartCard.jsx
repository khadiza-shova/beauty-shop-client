import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthProvides from '../../Providers/AuthProvides';

const CartCard = ({cart,carts,setCarts}) => {

  
    const {_id,image,name,Bname,category,price,descri,rating}= cart;
   

    const handleDelete=(id)=>{
        
        console.log(id);

        fetch(`https://beaufly-shop-server.vercel.app/cart/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

            const remaining = carts.filter(remain=> remain._id != id);
            setCarts(remaining);
          
        })
    }


    return (

        <div>
           <div className="brand_product card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-1/2' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{Bname}</p>
                    <p className='text-[17px]'>Price :{price}</p>
                    <button onClick={()=>handleDelete(_id)} className='btn bg-primaryB text-white'>Delete</button>
                </div>
            </div>


</div>
        
    );
};

export default CartCard;
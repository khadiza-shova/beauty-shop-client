import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {

    const updateLoadData = useLoaderData();
    console.log(updateLoadData);
    const {_id,image,name,Bname,category,price,descri,rating}= updateLoadData;

    const handleUpdateProduct =(e)=>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const  Bname= form.Bname.value;
        const category = form.category.value;
        const price = form.price.value;
        const descri = form.descri.value;
        const rating = form.rating.value;
        console.log(_id);
        
        const updateProduct ={image, name, Bname,category,price,descri,rating}
        console.log(updateProduct);

        fetch(`https://beaufly-shop-server.vercel.app/products/${Bname}/update/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire(
                'Good job!',
                'Product Update Successfully !',
                'success'
            )

        })

    }

    return (
        <div>
            <h2 className='mt-10 text-center text-2xl font-semibold'>Update Product Details</h2>
            <div className=" min-h-screen mt-10">
                <div className="w-full p-10 lg:w-1/2 mx-auto flex-col lg:flex-row-reverse">
                  
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image URL" defaultValue={image} name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" defaultValue={name} className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" name="Bname" defaultValue={Bname} className="input input-bordered" required />
                             
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Category" name="category" defaultValue={category} className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" defaultValue={price} className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" placeholder="Description" name="descri" defaultValue={descri} className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="nummber" placeholder="Rating" name="rating"defaultValue={rating} className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-primaryB text-white">Update Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateProduct;
import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAddProduct =(e)=>{

        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const  Bname= form.Bname.value;
        const category = form.category.value;
        const price = form.price.value;
        const descri = form.descri.value;
        const rating = form.rating.value;
        
        const addProduct ={image, name, Bname,category,price,descri,rating}
        console.log(addProduct);

        fetch("https://beaufly-shop-server.vercel.app/products",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Add Product Successfully !',
                    'success'
                )
            }
            console.log(data)
        })
    }
    return (
        <div>
           
            <div className=" min-h-screen mt-10">
                <div className="w-11/12 md:w-1/2 mx-auto flex-col lg:flex-row-reverse">
                  
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image URL" name="image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <input type="text" placeholder="Brand Name" name="Bname" className="input input-bordered" required />
                             
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Category" name="category" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text" placeholder="Description" name="descri" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="nummber" placeholder="Rating" name="rating" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-primaryB text-white">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
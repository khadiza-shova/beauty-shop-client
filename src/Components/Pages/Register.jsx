import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvides';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error,setError]=useState('');


    const handleSignUp=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const name = form.name.value;
        const image = form.image.value;

        console.log(email,pass,name,image);
        if(!/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/.test(pass)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must be at least 6 Character, One Digit, One Letter!', 
              })
        }

else{
        setError("");
        createUser(email,pass)
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'Registration Successfully Complete !',
                'success'
              )

            // Update Profile 
            updateProfile(result.user,{
                displayName:name,
                photoURL:image
            })
            .then(()=>console.log("Profile Updated"))
            .catch()


            const user = {email}
            fetch("localhost:5000/user",{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
               

            })

        })
        .catch(error=>{
            console.log("Error",error.message);
           setError(error.message);
           
        })
    }
}
    return (
      
        <div className="p-10 min-h-screen bg-base-200">
        <div className="w-96 mx-auto flex-col lg:flex-row-reverse">
            {
                error && <h2>{error.message}</h2>
            }
            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
            <h2 className='text-center text-2xl font-semibold mt-4'>Register Page</h2>
                <form onSubmit={handleSignUp} className="card-body ">
                <div className="form-control">
                  
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image" name='image' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white bg-primaryB">Register</button>
                    </div>

                   
                        <p> Already Have an Acount Pleadse  <Link class="text-primaryB" to="/login">Login</Link></p>
                    
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
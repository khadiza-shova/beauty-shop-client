import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvides';
import Swal from 'sweetalert2';

const Login = () => {
    const { loginUser, signInWithGoogle, auth } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        console.log(email, pass);

        loginUser(email, pass)
            .then(result => {
                console.log(result.user);

                Swal.fire(
                    'Good job!',
                    'Login Successfully Complete !',
                    'success'
                )
                // navigate after login
                navigate(location?.state?location.state : '/');
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


            .then(error => {
                // console.log(error.message);
                alert(error.message);
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: "Envalid Email and Pass", 
                //   })
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Good job!',
                    'Google With Login Successfully Complete !',
                    'success'
                )
                // navigate after login
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>

            <div className="p-10 min-h-screen bg-base-200">
                <div className="w-96 mx-auto flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                        <h2 className='text-center text-2xl font-semibold mt-4'>Login Page</h2>
                        <form onSubmit={handleLogin} className="card-body ">
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
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-primaryB">Login</button>
                                <button onClick={handleGoogleSignIn} className="mt-2 btn text-white bg-primaryB">Google With Login</button>
                            </div>

                            <p>New User ?  <Link className='text-primaryB' to="/register">
                                Register
                            </Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
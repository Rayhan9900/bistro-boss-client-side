import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcLeft, FcRight } from "react-icons/fc";
import Swal from 'sweetalert2'
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location  login page', location.state)

    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "User Login Successful",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });



                navigate(from, { replace: true });

            })
    }



    const handleValidedCaptch = (e) => {
        const user_captch_value = e.target.value;
        if (validateCaptcha(user_captch_value)) {
            setDisabled(false)

        }
        else {
            alert('Captch dose not match')
        }

    }



    return (
        <>

            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-sky-300 p-8">
                <div className="hero-content flex-col">
                    <div>

                    </div>
                    <div className="text-center ">
                        <h1 className="text-5xl text-red-500 font-bold">Pleace Login now!</h1>
                    </div>
                    <div className="card md:w-1\2 max-w-sm shadow-2xl shadow-orange-600  bg-pink-300 ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-pink-700">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered text-blue-500" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-pink-700">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-red-700" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">

                                    <LoadCanvasTemplate />

                                </label>
                                {/* <input onBlur={handleValidedCaptch} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered text-purple-800 " required /> */}
                            </div>
                            {/* TODO:  apply disabled  for  re captcha  */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        <p className='flex justify-center  text-center mb-4'>New here? <FcRight size={30} />  <Link to="/signUp" className='text-red-600 text-2xl border  border-red-600 rounded-xl'>Sign Up  </Link> <FcLeft size={30} /> Create an account</p>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
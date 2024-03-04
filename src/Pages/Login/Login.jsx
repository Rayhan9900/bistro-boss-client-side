import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


function Login() {

    const captchaRaf = useRef(null);

    const [disabled, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRaf.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            alert('Captcha dose not match')
        }
    }






    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-sky-300">
                <div className="hero-content flex-col">
                    <div>

                    </div>
                    <div className="text-center ">
                        <h1 className="text-5xl text-red-500 font-bold">Pleace Login now!</h1>
                    </div>
                    <div className="card md:w-1\2 max-w-sm shadow-2xl shadow-fuchsia-600  bg-pink-300 ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-pink-700">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-pink-700">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRaf} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2 hover:bg-green-600 ">Validate</button>

                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
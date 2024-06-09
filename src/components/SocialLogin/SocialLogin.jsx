import React from 'react'
import useAuth from '../../hooks/useAuth'
import { FcGoogle } from 'react-icons/fc';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

function SocialLogin() {

    const { signInGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignUpGoogle = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })

    }



    return (
        <div>
            <div className="divider divider-secondary"></div>
            <div className=''>
                <button className=" flex justify-evenly items-center px-7 gap-3 mb-7 text-3xl text-accent border border-red-600 rounded-2xl " onClick={handleSignUpGoogle}>
                    <FcGoogle />----- Google
                </button>
            </div>

        </div>
    )
}

export default SocialLogin
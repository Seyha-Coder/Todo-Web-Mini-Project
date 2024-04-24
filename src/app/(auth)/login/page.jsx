'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { loginService } from '@/Service/authService'
import { signIn } from "next-auth/react";
import loginImage from '../../../../public/assets/icons/login.svg'
function Login() {
    const handleLogin = async (userInfo) =>  {

        const newUser = {
            email: userInfo.get("email"),
            password: userInfo.get("password")
        }
        const res =signIn("credentials", {
            redirect: false,
            ...newUser,
        })
      
    }

  return (
    <div className='flex items-center w-full h-screen'>
        <div className='w-[80%] h-[80%]  mb-16 ml-16'>
            <div className=''>
                <Image src={"/assets/icons/logoLogin.png"} width={170} height={120} />
            </div>
            <div className='flex'>
                <div className='w-8/12 h-full'>
                    <form className="h-[70%] w-[70%] bg-white pl-32 mt-10" action={handleLogin}>
                        <h1 className="my-6 text-xl font-semibold">Login</h1>
                        <div className="w-full">
                            <input type="email" name='email' className="w-full p-2 border-2 rounded-md border-gray focus:outline-none" placeholder="Email" />
                        </div>
                        <div className="w-full my-4">
                            <input type="password" name='password' className="w-full p-2 border-2 rounded-md border-gray focus:outline-none" placeholder="Password" />
                        </div>
                        <div className="w-full my-6">
                            <button  className="w-full p-2 text-white rounded-md bg-gray">Login</button>
                        </div>
                        <div className="w-full">
                        <p>Don't have an account?  <Link href="/register" className="text-blue-500">Register</Link></p>
                        </div>
                        <div className="flex w-full my-7 text-gray">
                            <div className="flex justify-center ">
                                <span className="">________________________</span>
                            </div>
                            <div className="p-[6px] mx-[18.7px]">
                                <span >Continue</span>
                            </div> 
                            <div className="flex justify-center">
                                <span>________________________</span>
                            </div>
                        </div>
                        <div className="flex justify-center w-full p-2 border rounded-md border-gray">
                            <div className="flex">
                                <Image src={"https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"}
                                width={15} height={15} />
                                <span className="pl-3">Google</span>
                            </div>
                        </div>
                    </form>
                    <div className="w-full pl-6 mt-6 text-sm text-gray">
                        <p>&copy; 2024 My office. All Rights Reserved</p>
                    </div>
                </div>
                <div className='relative z-10 w-4/12 bg-blue-300'>
                    <Image src={loginImage} width={500} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import signUp from '../../../../public/assets/icons/sign-up.svg'
import registerAction from '@/actions/RegisterAction';
import { useForm } from 'react-hook-form';

function Register() {
    const {
        handleSubmit,
        formState: {errors},
        register,
    } = useForm();

    const handleRegister = async (data) => {
        console.log(data);
        await registerAction(data);
    };
  return (
    <div className='flex items-center w-full h-screen'>
        <div className='w-11/12 h-[80%] mx-auto '>
        <div className=''>
                <Image src={"/assets/icons/logoLogin.png"} width={200} height={200} />
            </div>
            <div className='flex'>
                <div className='w-8/12 h-full'>
                    <form className="h-[70%] w-[85%]  pl-6 mt-10" onSubmit={handleSubmit(handleRegister)}>
                        <div className='flex justify-between w-full'>
                            <div className="w-[47%]">
                                <label htmlFor="fname" className='block my-3 text-gray'>First Name : </label>
                                <input type="text" id="fname" className="w-full p-2 border-2 rounded-md border-gray focus:outline-noneplaceholder:text-sm" placeholder="Enter your name"
                                {...register("firstname", {
                                    required: "Invalid firstname",
                                })
                                } 
                                />
                            </div>
                            <div className="w-[47%]">
                                 <label htmlFor="lname" className='block my-3 text-gray'>First Name : </label>
                                <input type="text"
                                {...register("lastname", {
                                    required: "Invalid lastname",
                                })
                                }
                                 id="lname" className="w-full p-2 border-2 rounded-md border-gray focus:outline-none placeholder:text-sm" placeholder="Enter your name" />
                            </div>
                        </div>
                        
                        <div className='flex justify-between w-full'>
                            <div className="w-[47%]">
                                <label htmlFor="email" className='block my-3 text-gray'>Email : </label>
                                <input type="email"
                                {...register("email", {
                                    required: "Invalid email",
                                })
                                }
                                 id="email" className="w-full p-2 border-2 rounded-md border-gray focus:outline-noneplaceholder:text-sm" placeholder="info@gmail.com" />
                            </div>
                            <div className="w-[47%]">
                                 <label htmlFor="password" className='block my-3 text-gray'>Password : </label>
                                <input type="password"
                                {...register("password", {
                                    required: "Invalid password",
                                })
                                }
                                 id="password" className="w-full p-2 border-2 rounded-md border-gray focus:outline-none placeholder:text-sm" placeholder="xxxxxxxxxx" />
                            </div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className="w-[47%]">
                                <label htmlFor="gender" className='block my-3 text-gray'>Gender : </label>
                                <input type="text"
                                {...register("gender", {
                                    required: "Invalid password",
                                })
                                }
                                 id="gender" className="w-full p-2 border-2 rounded-md border-gray focus:outline-noneplaceholder:text-sm" placeholder="Enter your name" />
                            </div>
                            {/* <div className="w-[47%]">
                                 <label htmlFor="pf" className='block my-3 text-gray'>Profile : </label>
                                <input type="text" id="pf" className="w-full p-2 border-2 rounded-md border-gray focus:outline-none placeholder:text-sm" placeholder="Enter your name" />
                            </div> */}
                        </div>
                        <div className='flex justify-between my-6'>
                            <button type='submit' className='px-6 py-1 text-white bg-blue-600 rounded-md'>
                                
                                Register
                            </button>
                            <Link href="/login" className='text-blue-500'>Go to login</Link>
                        </div>
                        
                        
                    </form>
                    
                </div>
                <div className='relative z-10 w-4/12 '>
                    <Image src={signUp} width={500} height={700} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
import React from 'react'
import logo from '/assets/authImages/Instagram_logo.svg'
import { FaFacebook } from "react-icons/fa";
import { Button } from '../../../components/Button';
import { AuthFooter } from '../../../components/AuthFooter';
import Input from '../../../components/Input';
import { Or } from '../../../components/Or';
import { ImFacebook2 } from "react-icons/im";

export function Login() {
    return (
        <>
            <main className='font-inter flex-col flex items-center justify-center text-center '>
                <div className="flex my-[20px] flex-col items-center md:mt-[50px]   lg:mt-[30px] justify-center py-[24px] px-[20px] w-[30%]">

                    <img src={logo} alt="instagram logo" />

                    <section className='flex flex-col items-center gap-2 w-full mt-[24px]'>
                        <Input placeholder="Email" name="email" type="email" />
                        <Input placeholder="Password" name="password" type="password" />

                    </section>

                    <section className="flex flex-col text-gray font-normal text-[12px] gap-[20px] mt-[25px] w-full">

                        <Button text="Log in" type="submit" style="bg-skyBlue text-white text-[15px] *:text-[18px]" />
                        <Or style="my-[10px]" />
                    </section>

                    <div className='flex items center gap-[10px] flex-col py-[20px]  '>
                        <p className='font-medium text-fbColor text-[15px]  flex items-center gap-[6px] [&_span]:text-[19px]'> <span><ImFacebook2 /></span> Log in with facebook</p>
                        <span className='text-links text-[12px]'>Forgotten your Password?</span>
                    </div>

                    <AuthFooter>
                        <>
                            Have an account? <span>Log in</span>
                        </>
                    </AuthFooter>

                </div>
            </main>
        </>
    )
}

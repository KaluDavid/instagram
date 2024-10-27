import React, { useState } from 'react'
import logo from '/assets/authImages/Instagram_logo.svg'
import { FaFacebook } from "react-icons/fa";
import { Button } from '../../../components/Button';
import { AuthFooter } from '../../../components/AuthFooter';
import Input from '../../../components/Input';
import { Or } from '../../../components/Or';

export function SignUp() {
    const [formData, setFormData] = useState({ userName: "", fullName: "", email: "", password: "" });

    // function to handle formData
    function handleFormData(e) {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value });
    }

    // hanlde submit function
    function handleSubmit() {
        return;
    }
    return (

        <>
            <main className='font-inter flex-col flex items-center justify-center text-center'>
                <div className="flex my-[20px] flex-col items-center md:mt-[50px] w-[30%]  lg:mt-[30px] justify-center py-[24px] px-[20px]">

                    <img src={logo} alt="instagram logo" />
                    <div className="flex items-center flex-col [&_span]:font-medium  [&_span]:text-[13px] [&_span]:text-gray text-center gap-[20px] mt-4 w-full">

                        <span>
                            Sign up to see photos and videos from <br />your friends.
                        </span>
                        <Button text="Log In with facebook" type="submit" style="bg-blue text-white text-[15px] *:text-[18px]">
                            <FaFacebook />
                        </Button>
                    </div>

                    <Or style="my-[25px]" />

                    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 w-full'>
                        <Input placeholder="Email" name="email" type="email" onChange={handleFormData} value={formData.email} />
                        <Input placeholder="Full Name" name="fullName" type="text" onChange={handleFormData} value={formData.fullName} />
                        <Input placeholder="Username" name="userName" type="text" onChange={handleFormData} value={formData.userName} />
                        <Input placeholder="Password" name="password" type="password" onChange={handleFormData} value={formData.password} />
                    </form>

                    <section className="flex flex-col text-gray font-normal text-[12px] gap-[20px] [&_span]:underline [&_span]:text-links  [&_span]:underline-offset-2 my-[25px] w-full">
                        <p>
                            People who use our service may have uploaded your <br /> contact information to Instagram. <span>Learn more</span>
                        </p>
                        <p>
                            By signing up, you agree to our <span>Terms,</span> <span>Privacy Policy</span> <br /> and <span>Cookies Policy</span>.
                        </p>

                        <Button text="Log in" type="submit" style="bg-skyBlue text-white text-[15px] *:text-[18px]" />
                    </section>

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

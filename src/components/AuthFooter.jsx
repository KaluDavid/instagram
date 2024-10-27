import React from 'react'
import playstore from '/assets/authImages/playstore.svg'
import microsoft from '/assets/authImages/microsoft.svg'

export function AuthFooter({ children }) {
    return (
        <section className="flex flex-col items-center justify-center gap-[30px] mt-[25px]">
            <p className='text-darkGray [&_span]:text-skyBlue font-medium'>
                {children}
            </p>
            <div className='flex flex-col items-center justify-center gap-[20px]'>
                <p>Get the app.</p>

                <fieldset className='flex items-center gap-[16px] object-contain'>
                    <img src={playstore} alt="playstore" />
                    <img src={microsoft} alt="microsoft" />
                </fieldset>
            </div>
        </section>
    )
}

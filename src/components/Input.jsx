import React from 'react'

export default function Input({ type, name, placeholder, onChange, value }) {
    return (
        <>
            <input type={type} name={name} placeholder={placeholder} required className='w-full border-borderColor py[239px] px-[10px] rounded-[2px] h-[7vh] border-2 outline-borderColor text-darkGray' onChange={onChange} value={value} />
        </>
    )
}

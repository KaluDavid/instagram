import React from 'react'

export function Button({ type, children, text, style }) {
    return (
        <>
            <button type={type} className={`${style} rounded-lg py-2 px-[62px] flex gap-2 items-center justify-center border-none cursor-pointer font-medium w-full text-center`}>
                {children} {text}
            </button>
        </>)
}

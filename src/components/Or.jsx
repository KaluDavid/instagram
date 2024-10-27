import React from 'react'

export function Or({ style }) {
    return (
        <>
            <div className={`${style} flex items-center justify-center gap-5 [&_hr]:border-[1px] [&_hr]:opacity-80 [&_hr]:w-full [&_hr]:border-line [&_span]:text-orColor [&_span]:font-semibold [&_span]:text-[15px] w-full `}>
                <hr /> <span>OR</span> <hr />
            </div>
        </>
    )
}

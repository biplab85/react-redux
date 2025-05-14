'use client';
import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((previousCount) => previousCount + 1);
    }

    const decrement = () => {
        setCount((previousCount) => previousCount - 1);
    }

    return (
        <div>

            <div className="bg-white border-2 shadow w-1/2 p-10 m-auto">
                <h3 className=' text-center text-3xl text-[#565656]'>Simple counter application </h3>
                <div className="text-black text-[30px] text-center mb-3">{count}</div>
                <div className="flex items-center justify-center">
                    <button
                        className="text-[16px] rounded-2xl bg-blue-500 p-3 w-[150px] m-2 cursor-pointer"
                        onClick={increment}
                    >
                        Increment
                    </button>
                    <button
                        className="text-[16px] rounded-2xl bg-red-500 p-3 w-[150px] m-2 cursor-pointer"
                        onClick={decrement}
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    )
}

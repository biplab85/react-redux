
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }
    return (
        <div className="flex items-center w-1/4 m-auto mb-2 h-[45px] justify-between border border-[#1d2532] rounded-2xl">
            <button
                className="flex items-center justify-center  text-[16px] w-[80px] text-center rounded-2xl bg-blue-500 p-2 cursor-pointer"
                onClick={increment}
            >
                <FaPlus />

            </button>
            <div className="text-center text-[40px] text-[#7287a5] hover:text-[#4e607a] px-1">
                {count}
            </div>
            <button
                className="flex items-center justify-center text-[#000] text-[16px] w-[80px] text-center rounded-2xl bg-red-100 p-2 cursor-pointer"
                onClick={decrement}
            >
                <FaMinus />
            </button>
        </div>
    );
}

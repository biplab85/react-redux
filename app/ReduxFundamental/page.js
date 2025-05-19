'use client';
import { useState } from 'react';
import Counter from '../component/Counter';
import Stats from '../component/Stats';
import CodeViewer from '../component/CodeViewer';
import { RightAssideMenu } from '../component/RightAssideMenu';
import { FaCode } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const initialState = [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
];

export default function Home() {
    const [state, setstate] = useState(initialState);
    const [showCode, setShowCode] = useState(false);

    const totalCount = () =>
        state.reduce((total, counter) => total + counter.count, 0);

    const increment = (id) => {
        const updatedCounter = state.map((c) =>
            c.id === id ? { ...c, count: c.count + 1 } : { ...c }
        );
        setstate(updatedCounter);
    };

    const decrement = (id) => {
        const updatedCounter = state.map((c) =>
            c.id === id ? { ...c, count: c.count - 1 } : { ...c }
        );
        setstate(updatedCounter);
    };

    return (
        <div className="p-3 container m-auto flex items-start justify-between">
            <div className="w-full relative">

                {/* Toggle code viewer button (FaCode icon) */}
                {!showCode && (
                    <button
                        className="absolute right-0 top-0 cursor-pointer text-2xl text-gray-500"
                        onClick={() => setShowCode(true)}
                    >
                        <FaCode />
                    </button>
                )}

                {/* Show either CodeViewer or Main content */}
                {showCode ? (
                    <div className="absolute top-0 left-0 right-0 bg-[#0f172a] border border-[#1d2532] h-[35vw] overflow-auto rounded-xl p-6 z-40">
                        <button
                            className="absolute right-5 top-5 text-white text-2xl cursor-pointer"
                            onClick={() => setShowCode(false)}
                        >
                            <IoMdCloseCircleOutline />
                        </button>
                        <CodeViewer />
                    </div>
                ) : (
                    <>
                        {state.map((count) => (
                            <Counter
                                key={count.id}
                                id={count.id}
                                count={count.count}
                                increment={increment}
                                decrement={decrement}
                            />
                        ))}
                        <Stats count={totalCount()} />
                    </>
                )}
            </div>

            {/* Right menu stays visible */}
            <RightAssideMenu />
        </div>
    );
}

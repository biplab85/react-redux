'use client';
import { useState } from 'react';
import { RightAssideMenu } from '../component/RightAssideMenu';
import Counter from './Counter';
import CodeViewer from './CodeViewer';
import { FaCode } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";


export default function Home() {
    const [showCode, setShowCode] = useState(false);

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
                <h3 className="mb-8 text-center text-3xl text-[#7287a5]">
                    1.2 Reactive UI and Reusability
                </h3>

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
                    <div className=''>
                        <Counter />
                        <Counter />
                        <Counter />
                    </div>
                )}

            </div>

            {/* Right menu stays visible */}
            <RightAssideMenu />
        </div>
    );
}

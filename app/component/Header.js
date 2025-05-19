'use client';
import Image from 'next/image';
import styles from '../src/theme/Header.module.scss'
import Link from 'next/link';



const Header = () => {
    return (
        <div className='mb-2 w-full border-b border-[#1d2532]'>
            <div className='p-3 container m-auto flex items-center justify-end'>
                <div className='w-1/2'>
                    <Link href="/">
                        <Image src="/logo.svg" alt="Redux" width={200} height={50} />
                    </Link>
                </div>
                <div className='w-1/2 flex items-center justify-end'>
                    <ul className='flex items-center justify-end'>
                        <li>
                            <Link className='text-[#7287a5] hover:text-[#4e607a]' href="ReduxFundamental">Redux Fundamental</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;

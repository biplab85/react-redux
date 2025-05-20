import Link from 'next/link';

export default function DropdownMenu() {
    return (
        <div className="relative inline-block text-left">
            <ul className="flex ring-black ring-opacity-5 ">
                <li className="relative group px-4 py-2 cursor-pointer">
                    <Link href="/module1" className="block text-[#7287a5] hover:text-[#4e607a]">
                        Module
                    </Link>
                    <ul className="absolute left-0 top-10 hidden group-hover:block w-40 bg-[#0f172a] rounded-md shadow-lg ring-1 ring-black">
                        <li className="px-4 py-2 hover:bg-[#0b1221] cursor-pointer">
                            <Link href="ReduxFundamental" className="block text-[#7287a5] hover:text-[#4e607a]">Module 1</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#0b1221] cursor-pointer">
                            <Link href="/module1/module1.2" className="block text-[#7287a5] hover:text-[#4e607a]">Module 1.2</Link>
                        </li>
                    </ul>
                </li>
                <li className="relative group px-4 py-2 cursor-pointer">
                    <Link href="/module2" className="block text-[#7287a5] hover:text-[#4e607a]">
                        Module 2
                    </Link>
                    <ul className="absolute left-0 top-10 hidden group-hover:block w-40 bg-[#0f172a] rounded-md shadow-lg ring-1 ring-black">
                        <li className="px-4 py-2 hover:bg-[#0b1221] cursor-pointer">
                            <Link href="/module2/module2.1" className="block text-[#7287a5] hover:text-[#4e607a]">Module 2.1</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#0b1221] cursor-pointer">
                            <Link href="/module2/module2.2" className="block text-[#7287a5] hover:text-[#4e607a]">Module 2.2</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}



import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `'use client';
import { useState } from 'react';
import Counter from '../component/Counter';
import Stats from '../component/Stats';
import Link from 'next/link';

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 }
];

export default function Home() {
  const [state, setstate] = useState(initialState);

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
      <div className="w-full">
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
      </div>
      <div className="w-[350px] bg-[#0f172a] border-b border-[#1d2532]">
        <ul className="p-3">
          {[...Array(7)].map((_, i) => (
            <li key={i} className="p-3">
              <Link
                className="text-[#7287a5] hover:text-[#4e607a]"
                href="/"
              >
                Home
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
`;

export default function CodeViewer() {

    return (
        <>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
}

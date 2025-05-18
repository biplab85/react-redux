'use client';
import { useState } from 'react';
import Counter from './component/Counter';
import Stats from './component/Stats';
import Header from './component/Header';
import { AboutRedux } from './component/AboutRedux';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  },
]

export default function Home() {

  const [state, setstate] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0); // Formula of reduce
  }


  const increment = (id) => {
    const updatedCounter = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1
        }
      }
      return { ...c };
    });
    setstate(updatedCounter);
  };

  const decrement = (id) => {
    const updatedCounter = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1
        }
      }
      return { ...c };
    });
    setstate(updatedCounter);
  };

  return (
    <div className="test">
      <Header />
      <AboutRedux />
      {state.map(count =>
        <Counter
          key={count.id}
          id={count.id}
          count={count.count}
          increment={increment}
          decrement={decrement}
        />
      )}

      <Stats count={totalCount()} />
    </div>
  );
}

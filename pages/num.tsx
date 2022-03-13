/* eslint-disable import/extensions */
import type { NextPage } from 'next';
import React, { useState } from 'react';
import api from '../config/api';

const B: NextPage = () => {
  const [inp, setInp] = useState<number>(0);
  const [ans, setAns] = useState<'Even' | 'Odd' | 'None'>();

  const upDateData = async () => {
    const resp = await fetch(`${api}api/${inp}`, {
      method: 'POST',
      credentials: 'include',
    });
    console.log(resp);
    const answ = await resp.json();
    setAns(answ.ans);
  };
  return (
    <div>
      <img src={`${api}p1.png`} alt="not working" />
      <input
        onChange={(e) => {
          setInp(Number(e.target.value) || 0);
        }}
      />
      <h1>{`Number was ${inp}. And it is ${ans}`}</h1>
      <button onClick={upDateData} type="button">
        Check
      </button>
    </div>
  );
};

export default B;

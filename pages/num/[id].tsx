/* eslint-disable import/extensions */
import type { NextPage } from 'next';
import React from 'react';
import apiUrl from '../../config/api';

type prop = {
  num: string;
  ans: 'Even' | 'Odd';
};

const B: NextPage<prop> = ({ num, ans }) => (
  <div>
    <h1>{`Number was ${num}. And it is ${ans}`}</h1>
  </div>
);

B.getInitialProps = async (ctx) => {
  const param = ctx.query?.id;

  const x = await fetch(`${`${apiUrl}api/${param}`}`);
  const res: prop = await x.json();

  return {
    ...res,
  };
};

export default B;

import React from 'react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const Normal = () => {
  return <Heading>Hello Roman</Heading>;
};

export const big = () => {
  return <Heading big>Hello Roman</Heading>;
};

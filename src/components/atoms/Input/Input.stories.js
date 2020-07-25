import React from 'react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Normal = () => {
  return <Input placeholder="login" />;
};

export const Search = () => {
  return <Input search placeholder="search" />;
};

import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const noteSidebar = () => {
  return <Sidebar cardType="note" />;
};

export const twitterSidebar = () => {
  return <Sidebar cardType="twitter" />;
};

export const articleSidebar = () => {
  return <Sidebar cardType="article" />;
};

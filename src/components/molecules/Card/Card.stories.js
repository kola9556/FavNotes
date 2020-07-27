import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const noteCard = () => {
  return <Card />;
};

export const twitterCard = () => {
  return <Card cardType="twitter" />;
};

export const articleCard = () => {
  return <Card cardType="article" />;
};

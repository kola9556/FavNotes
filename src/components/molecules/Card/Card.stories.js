import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const primaryCard = () => {
  return <Card />;
};

export const secondaryCard = () => {
  return <Card cardType="twitter" />;
};

export const tertiaryCard = () => {
  return <Card cardType="article" />;
};

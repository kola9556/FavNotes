import React from 'react';
import Button from './Button';

export default {
  title: 'MyButton',
  component: Button,
};

export const Text = () => {
  const actio = () => {
    const bButton = document.getElementById('b');
    if (bButton.style.visibility === 'hidden') {
      bButton.style.visibility = 'visible';
    } else {
      bButton.style.visibility = 'hidden';
    }
  };
  return (
    <>
      <Button onClick={actio}>Hello Button</Button>
      <Button id="b" secondary visibility="hidden">
        WOW!
      </Button>
    </>
  );
};

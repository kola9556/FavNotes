import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import styled from 'styled-components';
import pen from 'assets/pen.svg';
import bulb from 'assets/bulb.svg';
import logout from 'assets/logout.svg';
import plus from 'assets/plus.svg';
import twitter from 'assets/twitter.svg';

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
};

const YellowBackground = styled.div`
  width: 130px;
  background-color: ${({ theme }) => theme.note};
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pen = () => {
  return (
    <YellowBackground>
      <ButtonIcon icon={pen} />
    </YellowBackground>
  );
};

export const Bulb = () => {
  return (
    <YellowBackground>
      <ButtonIcon icon={bulb} />
    </YellowBackground>
  );
};

export const Logout = () => {
  return (
    <YellowBackground>
      <ButtonIcon icon={logout} />
    </YellowBackground>
  );
};

export const Plus = () => {
  return (
    <YellowBackground>
      <ButtonIcon icon={plus} />
    </YellowBackground>
  );
};

export const Twitter = () => {
  return (
    <YellowBackground>
      <ButtonIcon icon={twitter} />
    </YellowBackground>
  );
};

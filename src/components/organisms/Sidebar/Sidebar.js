import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.svg';
import pen from 'assets/pen.svg';
import bulb from 'assets/bulb.svg';
import logout from 'assets/logout.svg';
import twitter from 'assets/twitter.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 153px;
  height: 100vh;
`;

const StyledLogo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logo});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const ThreeIconsWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ButtonIconForLogout = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ cardType }) => (
  <>
    <StyledWrapper activeColor={cardType}>
      <StyledLogo to="/" />
      <ThreeIconsWrapper>
        <ButtonIcon exact as={NavLink} acticeClass="active" to="/" icon={pen} />
        <ButtonIcon as={NavLink} acticeClass="active" to="/twitters" icon={twitter} />
        <ButtonIcon as={NavLink} acticeClass="active" to="/articles" icon={bulb} />
      </ThreeIconsWrapper>
      <ButtonIconForLogout as={NavLink} acticeClass="active" to="/login" icon={logout} />
    </StyledWrapper>
  </>
);

Sidebar.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'articles']),
};

Sidebar.defaultProps = {
  cardType: 'note',
};
export default Sidebar;

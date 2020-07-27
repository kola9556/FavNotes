import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import ola from 'assets/ola.jpg';
import LinkIcon from 'assets/link.svg';

const StyledWrapper = styled.div`
  position: relative;
  box-shadow: 0px 10px 30px -10px ${({ theme }) => theme.grey200};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon});
  position: absolute;
  right: 25px;
  top: 25px;
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const Card = ({ cardType }) => (
  <>
    <StyledWrapper>
      {cardType === 'twitter' && <StyledAvatar src={ola} />}
      {cardType === 'article' && <StyledLinkButton />}
      <InnerWrapper flex activeColor={cardType}>
        <StyledHeading>My best note ever</StyledHeading>
        <DateInfo>3 days</DateInfo>
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum massa sapien,
          eget varius nunc dapibus id. Nunc accumsan tellus quis scelerisque lacinia. Mauris
          dignissim vestibulum feugiat. Phasellus molestie ultrices lectus, nec sodales nulla
          lacinia eget.
        </Paragraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'articles']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;

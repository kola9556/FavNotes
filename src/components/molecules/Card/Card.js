import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

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

  ${({ top }) =>
    top &&
    css`
      min-height: 120px;
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
  top: 60px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.article};
  border-radius: 50px;
  background: white url(${LinkIcon});
  position: absolute;
  right: 25px;
  top: 60px;
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
`;

const Card = ({ cardType, title, content, created, twitterName, articleUrl }) => (
  <>
    <StyledWrapper>
      {cardType === 'article' && <StyledLinkButton href={articleUrl} target="_blank" />}
      {cardType === 'twitter' && <StyledAvatar src={`http://twivatar.glitch.me/${twitterName}`} />}
      <InnerWrapper top flex activeColor={cardType}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button secondary>Remove</Button>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'articles']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;

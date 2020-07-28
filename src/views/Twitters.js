import React from 'react';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const twitters = [
  {
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  },

  {
    title: 'React router stuff',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
    twitterName: 'mjackson',
  },
  {
    title: 'Super animacje!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
    twitterName: 'sarah_edo',
  },
];

const StyledWrapper = styled.div`
  margin: 15px 30px;
`;

const StyledGridWrapper = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 55px;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  margin: 3px 0 30px;
`;

const Twitters = () => (
  <>
    <Sidebar cardType="twitter" />
    <StyledWrapper>
      <Input search placeholder="serach" />
      <Heading as="h1">Twitters</Heading>
      <StyledParagraph>6 twitters</StyledParagraph>
      <StyledGridWrapper>
        {twitters.map((item) => (
          <Card
            cardType="twitter"
            title={item.title}
            content={item.content}
            created={item.created}
            twitterName={item.twitterName}
          />
        ))}
      </StyledGridWrapper>
    </StyledWrapper>
  </>
);
export default Twitters;

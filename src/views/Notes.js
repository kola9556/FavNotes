import React from 'react';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const notes = [
  {
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
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

const Notes = () => (
  <>
    <Sidebar cardType="note" />
    <StyledWrapper>
      <Input search placeholder="serach" />
      <Heading as="h1">Notes</Heading>
      <StyledParagraph>6 notes</StyledParagraph>
      <StyledGridWrapper>
        {notes.map((item) => (
          <Card cardType="note" title={item.title} content={item.content} created={item.created} />
        ))}
      </StyledGridWrapper>
    </StyledWrapper>
  </>
);

export default Notes;

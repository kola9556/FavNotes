import React from 'react';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const articles = [
  {
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    title: 'Wish you React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  },
  {
    title: 'You gave React a bad name',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '5 days',
  },
  {
    title: 'Is it React you looking for?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
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

const Articles = () => (
  <>
    <Sidebar cardType="article" />
    <StyledWrapper>
      <Input search placeholder="serach" />
      <Heading as="h1">Articles</Heading>
      <StyledParagraph>6 articles</StyledParagraph>
      <StyledGridWrapper>
        {articles.map((item) => (
          <Card
            cardType="article"
            title={item.title}
            content={item.content}
            created={item.created}
            articleUrl={item.articleUrl}
          />
        ))}
      </StyledGridWrapper>
    </StyledWrapper>
  </>
);

export default Articles;

/* 
<StyledGridWrapper>
        {notes.map((item) => (
          <Card cardType="note" title={item.title} content={item.content} created={item.created} />
        ))}
      </StyledGridWrapper> */

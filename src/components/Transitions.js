import React from 'react';
import styled from 'styled-components';
import { WordsWrapper, BigWords, LittleWords } from './styles';

const Wrapper = styled.section``;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 0 50px 50px;
  }
`;

export default function Transitions() {
  return (
    <Wrapper>
      <WordsWrapper>
        <BigWords>
          Transitions: use them.
      </BigWords>
        <LittleWords>
          You can do a lot with CSS! Enhance usability and beautify your site simply by adding transitions (no fancy animations needed).
      </LittleWords>
      </WordsWrapper>
      <ContentWrapper>
        <a href="#" className="p link">email@example.com</a>
        <a href="/transitions" className="p underline">Go to here!</a>
        <div className="p a-button">Press Me</div>
        <div className="p close">X</div>
      </ContentWrapper>
    </Wrapper>
  );
}
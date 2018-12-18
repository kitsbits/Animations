import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { WordsWrapperBase, BigWords, LittleWords } from './styles.js'

const Wrapper = styled.section``;

const WordsWrapper = styled(WordsWrapperBase)`
  border-bottom: 1px solid ${colors.orange};
`;

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
        <a href="#" class="p link">email@example.com</a>
        <a href="/transitions" class="p underline">Go to here!</a>
        <div class="p a-button">Press Me</div>
        <div class="p close">X</div>
      </ContentWrapper>
    </Wrapper>
  );
}
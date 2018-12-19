import React from 'react';
import styled from 'styled-components';
import { colors, available } from '../utils';
import _ from 'lodash';

import PBold from './text/PBold';

import {
  WordsWrapper,
  BigWords,
  LittleWords,
} from './styles.js';

const Wrapper = styled.section`
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
`;

const BlocksWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Block = styled.span`
  height: 40px;
  width: 20px;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  transition: opacity 0.25s ease;
  opacity: 0.85;
  margin: 3px;
  &:hover {
    opacity: 1;
  }
`;

const BlockToColor = styled.div`
  margin: 75px auto 50px;
  height: 300px;
  width: 900px;
  background-color: ${props => props.backgroundColor};
  transition: background-color 2s ease-out;
`;

const HexWrapper = styled.div`
  position: absolute;
  right: 10px;
`;

const Hash = styled(PBold)`
  display: inline-block;
  width: 10px;
  margin: 40px 5px 0;
  line-height: 25px;
`;

const LetterWrapper = styled.div`
  display: inline-block;
  width: 10px;
  margin-right: 5px;
`;

const Letter = styled(Hash)`
  position: absolute;
  top: ${props => props.isVisible ? 0 : -12}px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: all 0.65s ${props => props.delay}s ease-in-out;
`;

class ColorPicker extends React.Component {
  state = {
    currentColor: colors[0],
  }

  onClick = (nextColor) => {
    const { currentColor } = this.state;
    if (currentColor !== nextColor) {
      this.setState({ currentColor: nextColor });
    }
  }

  renderBlocks = (colors) => (
    _.map(colors, (color) => (
      <Block
        key={color}
        onClick={() => this.onClick(color)}
        backgroundColor={color}
      />
    ))
  )

  renderLetterWrappers = (available, currentColor) => (
    _.times(6, (i) => {
      const currentLetter = currentColor[i];
      return (
        <LetterWrapper key={`space-${i}`}>
          {this.renderLetters(available, currentLetter, i)}
        </LetterWrapper>
      );
    })
  )

  renderLetters = (available, currentLetter, place) => (
    _.map(available, (letter, i) => {
      console.log(currentLetter === letter)
      return (
        <Letter
          key={`letter-${letter}-${i}`}
          isVisible={currentLetter === letter}
          delay={_.min([i, 8]) * 0.15}
        >
          {letter}
        </Letter>
      );
    })
  )

  render() {
    const { currentColor } = this.state;
    return (
      <Wrapper>
        <WordsWrapper>
          <BigWords>Styled Components</BigWords>
          <LittleWords>Pass props right into your styles</LittleWords>
        </WordsWrapper>
        <ContentWrapper>
          <BlocksWrapper>
            {this.renderBlocks(colors)}
          </BlocksWrapper>
          <HexWrapper>
            <Hash>#</Hash>
            {this.renderLetterWrappers(available, _.slice(currentColor, 1))}
          </HexWrapper>
          <BlockToColor backgroundColor={currentColor} />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default ColorPicker;
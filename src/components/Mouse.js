import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { TweenMax } from 'gsap';

import { WordsWrapper, BigWords, LittleWords } from './styles';

const Wrapper = styled.section``;

const MouseWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto 150px;
`;

const Svg = styled.svg`
  height: 96px;
  width: 57px;
  stroke: ${colors.darkGrey};
  fille: none;
`;

class Mouse extends React.Component {
  componentDidMount() {
    this.animateMouse = TweenMax.fromTo('#mouse', 0.85, { y: -5 }, { y: 0, repeat: -1, yoyo: true }).pause();
    this.animateMouse.play();
  }

  render() {
    return (
      <Wrapper>
        <WordsWrapper>
          <BigWords>Animating SVG's is a breeze!</BigWords>
          <LittleWords>{'Canvas has a built-in <animate> tag, but you can also tween canvas elements'}</LittleWords>
        </WordsWrapper>
        <MouseWrapper>
          <Svg viewBox="0 0 57 96" id="mouse">
            <rect strokeWidth="4" x="2" y="2" width="53" height="92" rx="25" fill="none">
            </rect>
            <line x1="28" y1="15" x2="28" y2="20" stroke={colors.darkGrey} strokeWidth="4" strokeLinecap="round">
              <animate
                attributeName="y2"
                from="15"
                to="25"
                dur="1.7s"
                // values="15; 25; 15"
                repeatCount="indefinite"
              />
            </line>
          </Svg>
        </MouseWrapper>
      </Wrapper>
    );
  }
}

export default Mouse;
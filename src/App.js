import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TimelineMax, Elastic } from 'gsap';
import _ from 'lodash';

import { colors } from './theme';
import PBold from './components/text/PBold';
import Transitions from './components/Transitions';

export const flicker = keyframes`
  0% { opacity: 0.3; }
  9% { opacity: 0.4; }
  25% { opacity: 0.5; }
  35% { opacity: 0.6; }
  45% { opacity: 0.9; }
  65% { opacity: 0.7; }
  71% { opacity: 0.4; }
  79% { opacity: 0.7; }
  85% { opacity: 0.9; }
  90% { opacity: 0.6; }
  95% { opacity: 0.5; }
  97% { opacity: 0.4; }
  100% { opacity: 0.3; }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  // overflow: scroll;
`;

const IntroOverlay = styled.div`
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.darkGrey};
  overflow: hidden;
`;

const Title = styled(PBold)`
  font-size: 55px;
  line-height: 55px;
  margin: 0;
  color: ${colors.darkGrey};
  margin-top: 82px;
`;

const OverlayTitle = styled(PBold)`
  color: white;
  // animation: ${flicker} 1.15s ease-out infinite;
  cursor: pointer;
  text-align: right;
  font-size: 75px;
  line-height: 75px;
  position: relative;
`;

const ContentWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 1200px;
  background-color: ${colors.lightGrey};
  padding: 75px 0;
  min-height: 750px;
`;

class App extends React.Component {
  enter = () => {
    const overlayTitle = this.overlayRef.querySelector('.overlay-title');
    this.enterAnimation = new TimelineMax()
      .to(overlayTitle, 0.1, { opacity: 1, ease: Elastic.easeOut })
      .to(overlayTitle, 0.1, { opacity: 0.6 })
      .to(overlayTitle, 0.15, { opacity: 0.8 })
      .to(overlayTitle, 0.1, { opacity: 0.5, delay: 0.15, ease: Elastic.easeOut })
      .to(overlayTitle, 0.1, { opacity: 0.9 })
      .to(overlayTitle, 0.15, { opacity: 0.7, ease: Elastic.easeOut })
      .to(overlayTitle, 0.1, { opacity: 0.1, delay: 0.2 })
      .to(overlayTitle, 0.15, { opacity: 0.6 })
      .to(overlayTitle, 0.1, { opacity: 0.4, ease: Elastic.easeOut })
      .to(overlayTitle, 0.15, { opacity: 0.5 })
      .to(overlayTitle, 0.1, { opacity: 0.1, delay: 0.1 })
      .to(overlayTitle, 0.15, { opacity: 0.7 })
      .addLabel('last')
      .to(overlayTitle, 0.25, { fontSize: '55px', lineHeight: '55px', marginTop: '82px', ease: Elastic.easeIn, delay: 0.2 }, 'last')
      .to(overlayTitle, 0.25, { autoAlpha: 0, ease: Elastic.easeIn, delay: 0.3 }, 'last')
      .to(this.overlayRef, 0.65, { opacity: 0, ease: Elastic.easeIn, delay: 0.4 }, 'last')
      .set(this.overlayRef, { display: 'none' })
      .set(this.contextRef, { overflow: 'scroll' })
  }

  render() {
    return (
      <Wrapper ref={(ref) => { this.contextRef = ref; }}>
        <Title>Intro to Animation</Title>
        <ContentWrapper>
          <Transitions />
        </ContentWrapper>
        <IntroOverlay ref={(ref) => { this.overlayRef = ref; }}>
          <OverlayTitle onClick={this.enter} className="overlay-title">Intro to Animation</OverlayTitle>
        </IntroOverlay>
      </Wrapper>
    );
  }
}

export default App;

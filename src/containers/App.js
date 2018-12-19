import React from 'react';
import styled from 'styled-components';
import { TimelineMax, TweenMax, Elastic, Sine } from 'gsap';
import _ from 'lodash';

import { colors } from '../theme';
import PBold from '../components/text/PBold';
import Form from '../components/Form';
import Nav from '../components/Nav';
import Transitions from '../components/Transitions';
import Keyframes from '../components/Keyframes';
import BarChart from '../components/BarChart';
import Takeaways from '../components/Takeaways';
import ColorPicker from '../components/ColorPicker';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
`;

const IntroOverlay = styled.div`
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.darkGrey};
  z-index: 2;
`;

const Title = styled(PBold)`
  font-size: 55px;
  line-height: 55px;
  margin: 0;
  color: ${colors.darkGrey};
`;

const OverlayTitle = styled(PBold)`
  color: white;
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
  padding: 75px 0 25px;
  transition: height 0.35s ease;
`;

const components = {
  Transitions,
  Keyframes,
  'Color Picker': ColorPicker,
  'Bar Chart': BarChart,
  Form,
  Takeaways,
};

const FADE_EASE = Sine.easeInOut;

class App extends React.Component {
  constructor() {
    super();
    this.navItems = _.keysIn(components);
    this.state = {
      hasEntered: true,
      currentComponent: this.navItems[0],
    }
  }

  componentDidMount() {
    const { hasEntered } = this.state;
    if (hasEntered) {
      TweenMax.set(this.contextRef, { overflow: 'scroll', padding: '80px 0', height: 'auto' });
    }
  }

  onNavClick = (nextComponent) => {
    const { currentComponent } = this.state;
    if (nextComponent !== currentComponent) {
      this.animateComponentChange = new TimelineMax()
        .set('.nav', { pointerEvents: 'none' })
        .to(this.contentRef, 0.5, { autoAlpha: 0, ease: FADE_EASE })
        .call(() => this.setState({ currentComponent: nextComponent }))
        .to(document.documentElement, 0.5, { scrollTop: 0, ease: FADE_EASE })
        .to(this.contentRef, 0.5, { autoAlpha: 1, ease: FADE_EASE })
        .set('.nav', { pointerEvents: 'initial' })
    }
  }

  enter = (hasEntered) => {
    if (!hasEntered) {
      this.overlayTitle = this.overlayRef.querySelector('.overlay-title');
      this.animateEnter = new TimelineMax()
        .set(this.contextRef, { padding: '80px 0', height: 'auto' })
        .to(this.overlayTitle, 0.1, { opacity: 1, ease: Elastic.easeOut })
        .to(this.overlayTitle, 0.1, { opacity: 0.6 })
        .to(this.overlayTitle, 0.15, { opacity: 0.8 })
        .to(this.overlayTitle, 0.1, { opacity: 0.5, delay: 0.15, ease: Elastic.easeOut })
        .to(this.overlayTitle, 0.1, { opacity: 0.9 })
        .to(this.overlayTitle, 0.15, { opacity: 0.7, ease: Elastic.easeOut })
        .to(this.overlayTitle, 0.1, { opacity: 0.1, delay: 0.2 })
        .to(this.overlayTitle, 0.15, { opacity: 0.6 })
        .to(this.overlayTitle, 0.1, { opacity: 0.4, ease: Elastic.easeOut })
        .to(this.overlayTitle, 0.15, { opacity: 0.5 })
        .to(this.overlayTitle, 0.1, { opacity: 0.1, delay: 0.1 })
        .to(this.overlayTitle, 0.15, { opacity: 0.7 })
        .addLabel('last')
        .to(this.overlayTitle, 0.25, { fontSize: '55px', lineHeight: '55px', marginTop: '82px', ease: Elastic.easeIn, delay: 0.2 }, 'last')
        .to(this.overlayTitle, 0.25, { autoAlpha: 0, ease: Elastic.easeIn, delay: 0.3 }, 'last')
        .to(this.overlayRef, 0.65, { opacity: 0, ease: Elastic.easeIn, delay: 0.4 }, 'last')
        .set(this.overlayRef, { display: 'none' })
        .set(this.contextRef, { overflow: 'scroll' })
    }
  }

  render() {
    const { hasEntered, currentComponent } = this.state;
    const Component = components[currentComponent];
    return (
      <Wrapper ref={(ref) => { this.contextRef = ref; }}>
        <Nav
          items={this.navItems}
          onClick={this.onNavClick}
          currentComponent={currentComponent}
        />
        <Title>Intro to Animation</Title>
        <ContentWrapper ref={(ref) => { this.contentRef = ref; }}>
          <Component />
        </ContentWrapper>
        {!hasEntered &&
          <IntroOverlay ref={(ref) => { this.overlayRef = ref; }}>
            <OverlayTitle onClick={() => this.enter(hasEntered)} className="overlay-title">Intro to Animation</OverlayTitle>
          </IntroOverlay>
        }
      </Wrapper>
    );
  }
}

export default App;

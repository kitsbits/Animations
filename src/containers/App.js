import React from 'react';
import styled from 'styled-components';
import { TimelineMax, TweenMax, Elastic, Sine } from 'gsap';
import _ from 'lodash';

import { colors } from '../theme';
import PBold from '../components/text/PBold';
import PDefault from '../components/text/PDefault';
import Form from '../components/Form';
import Nav from '../components/Nav';
import Transitions from '../components/Transitions';
import BarChart from '../components/BarChart';
import Takeaways from '../components/Takeaways';
import ColorPicker from '../components/ColorPicker';
import Scroll from '../components/Scroll';

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

const Repo = styled(PBold)`
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 25px;
  line-height: 50px;
  padding: 0 15px;
  background-color: black;
  color: ${colors.orange};
  letter-spacing: 1.5px;
  white-space: nowrap;
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
  'Color Picker': ColorPicker,
  'Bar Chart': BarChart,
  Scroll,
  Form,
  Takeaways,
};

const FADE_EASE = Sine.easeInOut;
const FLICKER_EASE = Elastic.easeOut;
const APP_WRAPPER = 'app-wrapper';
const INTRO_OVERLAY = 'intro-overlay';
const OVERLAY_TITLE = 'overlay-title';
const APP_CONTENT = 'app-content';
const REPO = 'repo';

class App extends React.Component {
  constructor() {
    super();
    this.navItems = _.keysIn(components);
    this.state = {
      // set to true to enter animation on reload
      hasEntered: false,
      // change index when playing around on a specific page
      // to stay on that page on reload
      currentComponent: this.navItems[0],
      // Transitions: 0
      // ColorPicker: 1
      // BarChart: 2
      // Scroll: 2
      // Form: 4
      // Takeaways: 5
    }
  }

  componentDidMount() {
    const { hasEntered } = this.state;
    if (hasEntered) {
      TweenMax.set(`#${APP_WRAPPER}`, { overflow: 'scroll', padding: '80px 0', height: 'auto' });
    }
  }

  onNavClick = (nextComponent) => {
    const { currentComponent } = this.state;
    if (nextComponent !== currentComponent) {
      this.animateComponentChange = new TimelineMax()
        .set('.nav', { pointerEvents: 'none' })
        .to(`#${APP_CONTENT}`, 0.5, { autoAlpha: 0, ease: FADE_EASE })
        .call(() => this.setState({ currentComponent: nextComponent }))
        .to(document.documentElement, 0.5, { scrollTop: 0, ease: FADE_EASE })
        .to(`#${APP_CONTENT}`, 0.5, { autoAlpha: 1, ease: FADE_EASE })
        .set('.nav', { pointerEvents: 'initial' })
    }
  }

  enter = (hasEntered) => {
    if (!hasEntered) {
      this.animateEnter = new TimelineMax()
        .set(`#${APP_WRAPPER}`, { padding: '80px 0', height: 'auto' })
        .addLabel('start')
        .to(`#${REPO}`, 0.25, { x: -50 })
        .to(`#${REPO}`, 0.35, { x: 0, width: 0, padding: 0, ease: Elastic.easeInOut })
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 1, ease: FLICKER_EASE }, 'start+=0.25')
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 0.6 }, 'start+=0.35')
        .to(`#${OVERLAY_TITLE}`, 0.15, { opacity: 0.8 }, 'start+=0.5')
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 0.5, delay: 0.15, ease: FLICKER_EASE })
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 0.9 })
        .to(`#${OVERLAY_TITLE}`, 0.15, { opacity: 0.7, ease: FLICKER_EASE })
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 0.1, delay: 0.2 })
        .to(`#${OVERLAY_TITLE}`, 0.15, { opacity: 0.6 })
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 0.4, ease: FLICKER_EASE })
        .to(`#${OVERLAY_TITLE}`, 0.15, { opacity: 0.5 })
        .to(`#${OVERLAY_TITLE}`, 0.1, { opacity: 0.1, delay: 0.1 })
        .to(`#${OVERLAY_TITLE}`, 0.15, { opacity: 0.7 })
        .addLabel('last')
        .to(`#${OVERLAY_TITLE}`, 0.25, { fontSize: '55px', lineHeight: '55px', marginTop: '82px', ease: Elastic.easeIn, delay: 0.2 }, 'last')
        .to(`#${OVERLAY_TITLE}`, 0.25, { autoAlpha: 0, ease: Elastic.easeIn, delay: 0.3 }, 'last')
        .to(`#${INTRO_OVERLAY}`, 0.65, { opacity: 0, ease: Elastic.easeIn, delay: 0.4 }, 'last')
        .set(`#${INTRO_OVERLAY}`, { display: 'none' })
        .set(`#${APP_WRAPPER}`, { overflow: 'scroll' })
    }
  }

  render() {
    const { hasEntered, currentComponent } = this.state;
    const Component = components[currentComponent];
    return (
      <Wrapper id={APP_WRAPPER}>
        <Nav
          items={this.navItems}
          onClick={this.onNavClick}
          currentComponent={currentComponent}
        />
        <Title>Intro to Animation</Title>
        <ContentWrapper id={APP_CONTENT}>
          <Component />
        </ContentWrapper>
        {!hasEntered &&
          <IntroOverlay id={INTRO_OVERLAY}>
            <OverlayTitle onClick={() => this.enter(hasEntered)} id={OVERLAY_TITLE}>Intro to Animation</OverlayTitle>
            <Repo id={REPO}>git clone https://github.com/noblepaper/Animations.git</Repo>
          </IntroOverlay>
        }
      </Wrapper>
    );
  }
}

export default App;

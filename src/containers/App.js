import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TimelineMax, Elastic, Sine } from 'gsap';
import _ from 'lodash';

import { colors } from '../theme';
import PBold from '../components/text/PBold';
import Form from '../components/Form';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import Transitions from '../components/Transitions';
import BarChart from '../components/BarChart';
import Takeaways from '../components/Takeaways';
import ColorPicker from '../components/ColorPicker';
import Mouse from '../components/Mouse';

const Wrapper = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 80px;
  position: relative;
`;

const Title = styled(PBold)`
  font-size: 55px;
  line-height: 55px;
  margin: 0;
  color: ${colors.darkGrey};
  cursor: pointer;
  user-select: none;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 3px;
    transition: width 0.15s ease;
    background-color: ${colors.purple};
  }

  &:hover {
    &:before {
      width: 20px;
    }
  }
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
  ColorPicker,
  BarChart,
  Mouse,
  Form,
  Takeaways,
};

const FADE_EASE = Sine.easeInOut;
const APP_WRAPPER = 'app-wrapper';
const APP_CONTENT = 'app-content';
export const FLICKER_EASE = Elastic.easeOut;
export const INTRO_OVERLAY = 'intro-overlay';
export const OVERLAY_TITLE = 'overlay-title';
export const REPO = 'repo';

class App extends React.Component {
  navItems = _.keysIn(components);

  onNavClick = (nextLocation = '/') => {
    const currentLocation = this.props.location.pathname.substring(1);
    if (nextLocation !== currentLocation) {
      this.animateComponentChange = new TimelineMax()
        .set('.nav', { pointerEvents: 'none' })
        .to(`#${APP_CONTENT}`, 0.5, { autoAlpha: 0, ease: FADE_EASE })
        .call(() => this.props.history.push(nextLocation))
        .to(document.documentElement, 0.5, { scrollTop: 0, ease: FADE_EASE })
        .to(`#${APP_CONTENT}`, 0.5, { autoAlpha: 1, ease: FADE_EASE })
        .set('.nav', { pointerEvents: 'initial' })
    }
  }

  render() {
    return (
      <Wrapper id={APP_WRAPPER}>
        <Nav
          items={this.navItems}
          onClick={this.onNavClick}
        />
        <Title onClick={() => this.onNavClick()}>Intro to Animation</Title>
        <ContentWrapper id={APP_CONTENT}>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/Transitions" component={Transitions} />
            <Route path="/ColorPicker" component={ColorPicker} />
            <Route path="/BarChart" component={BarChart} />
            <Route path="/Mouse" component={Mouse} />
            <Route path="/Form" component={Form} />
            <Route path="/Takeaways" component={Takeaways} />
            <Route component={Intro} />
          </Switch>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(App);

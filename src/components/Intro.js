import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { colors, media } from '../theme';
import { TimelineMax, Elastic } from 'gsap';

import PBold from '../components/text/PBold';

import {
  FLICKER_EASE,
  INTRO_OVERLAY,
  OVERLAY_TITLE,
  REPO,
} from '../containers/App';

const IntroOverlay = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.darkGrey};
  z-index: 100;
`;

const OverlayTitle = styled(PBold)`
  color: white;
  cursor: pointer;
  text-align: right;
  font-size: 75px;
  line-height: 75px;
  position: relative;
  user-select: none;
  ${media.small`
    font-size: 55px;
    line-height: 55px;
  `}
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
  ${media.small`
    font-size: 16px;
    line-height: 32px;
    letter-spacing: normal;
    padding: 0 10px;
  `}
`;

class Intro extends React.Component {
  enter = () => {
    this.animateEnter = new TimelineMax()
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
      .call(() => this.props.history.push('Transitions'))
  }

  render() {
    return (
      <IntroOverlay id={INTRO_OVERLAY}>
        <OverlayTitle onClick={this.enter} id={OVERLAY_TITLE}>Intro to Animation</OverlayTitle>
        <Repo id={REPO}>git clone https://github.com/noblepaper/Animations.git</Repo>
      </IntroOverlay>
    );
  }
}

export default withRouter(Intro);
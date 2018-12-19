import React from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';
import _ from 'lodash';

import { colors, barColors } from '../theme';
import PDefault from './text/PDefault';

import {
  WordsWrapper,
  BigWords,
  LittleWords,
} from './styles.js';

const Wrapper = styled.div`
  padding: 0 100px;
  user-select: none;
`;

const Row = styled.div`
  position: relative;
  margin: 0 auto 50px;
  max-width: 80%;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.darkGrey};
  }
  &.chart {
    &:before {
      content: '';
      position: absolute;
      top: 50px;
      left: -10px;
      width: 5px;
      height: calc(100% - 100px);
      background-color: ${barColors[2]};
    }
  }
`;

const P = styled(PDefault)`
  &.click {
    cursor: pointer;
    transition: all 0.35s ease;
    position: relative;
    &:hover {
      color: ${barColors[0]};
      transform: translateX(10px);
    }
  }
`;


class GSAP extends React.Component {
  state = {
    data: [250, 203, 155, 57],
  }

  componentDidMount() {
    this.animateInChart();
  }

  animateInChart = () => {
    const { data } = this.state;
    const bars = document.getElementById('chart').children;
    // console.dir(bars);
    _.each(bars, (bar, i) => {
      // console.log(bar);
      TweenMax.to(bar, 0.75, { width: data[i], backgroundColor: barColors[i], delay: ((i / 10) + 0.2) });
    });
  }

  render() {
    return (
      <Wrapper>
        <WordsWrapper>
          <BigWords></BigWords>
          <LittleWords></LittleWords>
        </WordsWrapper>
        <Row className="chart">
          <P>Bar Chart</P>
          <div id="chart">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <P onClick={this.animateInChart} className="click"> -- AGAIN!</P>
        </Row>
      </Wrapper>
    );
  }
}

export default GSAP;

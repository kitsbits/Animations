import React from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';
import _ from 'lodash';

import { colors, barColors } from '../theme';
import PDefault from '../components/text/PDefault';

const Wrapper = styled.div`
  padding: 0 100px;
`;

const Row = styled.div`
  position: relative;
  margin-bottom: 50px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.darkGrey};
  }
  &.chart {
    &:before {
      content: '';
      position: absolute;
      top: 67px;
      left: -10px;
      width: 5px;
      height: calc(100% - 67px);
      background-color: ${barColors[2]};
    }
  }
`;

const AnimationContainer = styled.div`
  width: 300px;
  min-height: 300px;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;


class GSAP extends React.Component {
  state = {
    data: [250, 203, 155, 57],
  }

  componentDidMount() {
    const { data } = this.state;
    this.animateInChart(data, barColors);
    // TweenMax.to('#fade-in', 0.5, { width: 200 });
  }

  animateInChart = (data, colors) => {
    const bars = document.getElementById('chart').children;
    console.dir(bars);
    _.each(bars, (bar, i) => {
      // console.log(bar);
      TweenMax.to(bar, 0.5, { width: data[i], backgroundColor: colors[i], delay: ((i / 10) + 0.2) });
    });
  }

  render() {
    return (
      <Wrapper>
        <Row>
          <AnimationContainer>
            <PDefault>Fade In</PDefault>
            <div id="fade-in" />
          </AnimationContainer>
          <AnimationContainer>
            <PDefault>Animate ??</PDefault>
          </AnimationContainer>
          <AnimationContainer>
            <PDefault>Animate Both</PDefault>
          </AnimationContainer>
        </Row>
        <Row className="chart">
          <AnimationContainer>
            <PDefault>Bar Chart</PDefault>
            {/* {this.renderBarChart(data, barColors)} */}
            <div id="chart">
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </div>
          </AnimationContainer>
        </Row>
      </Wrapper>
    );
  }
}

export default GSAP;

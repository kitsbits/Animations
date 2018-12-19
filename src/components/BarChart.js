import React from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';
import _ from 'lodash';

import { barColors } from '../theme';
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

const ChartWrapper = styled.div`
  position: relative;
  margin: 0 auto 50px;
  max-width: 80%;
  &:before {
    content: '';
    position: absolute;
    top: 52px;
    left: -10px;
    width: 5px;
    height: calc(100% - 135px);
    background-color: ${barColors[2]};
  }
`;

const P = styled(PDefault)`
  &.click {
    display: inline-block;
    cursor: pointer;
    transition: all 0.35s ease;
    position: relative;
    &:hover {
      color: ${barColors[2]};
      transform: translateX(10px);
    }
  }
`;

const Chart = styled.div`
  margin-bottom: 10px;
`;

const Bar = styled.div`
  width: 20px;
  height: 50px;
  margin-bottom: 10px;
`;


class GSAP extends React.Component {
  state = {
    data: [250, 203, 155, 57],
  }

  componentDidMount() {
    // take a look at the TweenMax function \\
    // what parameters does it take? \\
    // what methods can it call? \\
    console.dir(TweenMax);
    this.animateInChart();
  }

  animateInChart = () => {
    const { data } = this.state;
    // const bars = this.chartRef.children;
    const bars = document.getElementById('chart').children;
    // staggerTo takes and array! \\
    // TweenMax.staggerTo(this.chartRef.children, 0.75, { width: 250, backgroundColor: barColors[0] }, 0.25)
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
          <BigWords>TweenMax</BigWords>
          <LittleWords>Animate CSS with Javascript</LittleWords>
        </WordsWrapper>
        <ChartWrapper>
          <P>Bar Chart</P>
          <Chart ref={(ref) => { this.chartRef = ref; }} id="chart">
            <Bar />
            <Bar />
            <Bar />
            <Bar />
          </Chart>
          <P onClick={this.animateInChart} className="click"> -- AGAIN!</P>
        </ChartWrapper>
      </Wrapper>
    );
  }
}

export default GSAP;

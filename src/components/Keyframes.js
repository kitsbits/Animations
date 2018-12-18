import React from 'react';
import styled from 'styled-components';

import { colors } from '../theme';
import PDefault from '../components/text/PDefault';

const Wrapper = styled.div`
  padding: 0 100px;
`;

const Row = styled.div`
  margin-bottom: 50px;
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.darkGrey};
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


class Keyframes extends React.Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <AnimationContainer>
            <PDefault>Fade In</PDefault>
            {/* <div className="fade-in" /> */}
          </AnimationContainer>
          <AnimationContainer>
            <PDefault>Animate ??</PDefault>
            {/* <div className="grow" /> */}
          </AnimationContainer>
          <AnimationContainer>
            <PDefault>Animate Both</PDefault>
          </AnimationContainer>
        </Row>
        <Row>
          <AnimationContainer>
            <PDefault>Multiple Sequences</PDefault>
            <div className="grow" />
            <div className="grow" />
            <div className="grow" />
            <div className="grow" />
          </AnimationContainer>
        </Row>
      </Wrapper>
    );
  }
}

export default Keyframes;

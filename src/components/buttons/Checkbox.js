import React from 'react';
import styled from 'styled-components';

import { colors } from '../../theme';
import PDefault from '../text/PDefault';

const Wrapper = styled.div`
  position: relative;
  padding-left: 45px;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: ${props => props.isChecked ? 30 : 20}px;
  width: ${props => props.isChecked ? 30 : 20}px;
  transition: all 0.35s ease;
  border-radius: 2px;
  border: 2px solid ${props => props.isChecked ? colors.purple : colors.lightPurple};
  background-color: ${props => props.isChecked ? colors.purple : 'transparent'};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    height: 25px;
    width: 3px;
    top: 3px;
    left: 12.5px;
    transform: rotate(45deg) scale(${props => props.isChecked ? 1 : 0});
    background-color: white;
    border-radius: 25px;
    transition: all 0.35s ease;
    opacity: ${props => props.isChecked ? 1 : 0};
    .no-transition & {
      transition: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    height: 25px;
    width: 3px;
    top: 3px;
    left: 12.5px;
    transform: rotate(-45deg) scale(${props => props.isChecked ? 1 : 0});
    background-color: white;
    border-radius: 25px;
    transition: all 0.35s ease;
    opacity: ${props => props.isChecked ? 1 : 0};
    .no-transition & {
      transition: none;
    }
  }

  &:hover {
    border: 2px solid ${colors.purple};
  }

  .no-transition & {
    border: 2px solid ${colors.purple};
    transition: none;
    height: 30px;
    width: 30px;
  }
`;

const AgreeText = styled(PDefault)`
  font-size: 17px;
  line-height: 22px;
  transition: color 0.35s ease;
  color: ${props => props.isChecked ? colors.purple : colors.lightPurple};
  .no-transition & {
    color: ${colors.purple};
  }
`;

class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  onClick = (isChecked) => {
    this.setState({ isChecked: !isChecked });
  }

  render() {
    const { isChecked } = this.state;
    return (
      <Wrapper>
        <Box isChecked={isChecked} onClick={() => this.onClick(isChecked)} />
        <AgreeText isChecked={isChecked}>{this.props.text}</AgreeText>
      </Wrapper>
    );
  }
}

export default Checkbox;

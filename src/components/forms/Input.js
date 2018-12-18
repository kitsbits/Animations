import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { colors } from '../../theme';
import PBold from '../text/PBold';

export const Wrapper = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const Label = styled.label`
  font-size: 22px;
  line-height: 32px;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  color: ${props => props.isInvalid ? colors.darkGrey : colors.purple};
  transition: color 0.35s ease;
  .no-transition & {
    transition: none;
    color: ${colors.purple}
  }
`;

export const InputField = styled.input`
  display: block;
  width: 320px;
  height: 55px;
  border: 2px solid ${props => props.isInvalid ? colors.darkGrey : colors.lightPurple};
  border-radius: 2px;
  outline: none;
  font-size: 22px;
  line-height: 32px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  padding-left: 16px;
  background-color: transparent;
  transition: border 0.35s ease;
  margin-top: 5px;

  &:focus {
    border: 2px solid ${colors.purple};
  }
  .no-transition & {
    transition: none;
    border: 2px solid ${colors.purple};
  }
`;

export const ErrMsg = styled(PBold)`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: ${colors.darkGrey};
  opacity: ${props => props.isInvalid ? 1 : 0 };
  height: ${props => props.isInvalid ? 1 : 0 }px;
  bottom: ${props => props.isInvalid ? -7 : -12 }px;
  transition: all 0.35s ease;
  position: absolute;
  margin: 0;
  .no-transition & {
    transition: none;
    color: ${colors.purple};
  }
`;

class Input extends React.Component {
  state = {
    isInvalid: false,
    input: '',
  }

  onFocus = () => {
    const { isInvalid } = this.state;
    if (isInvalid) {
      this.setState({ isInvalid: false });
    }
  }

  onBlur = (event) => {
    const { value } = event.target;
    if (!value) {
      this.setState({ isInvalid: true });
    }
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ input: value });
  }

  render() {
    const { label, inputType } = this.props;
    const { isInvalid } = this.state;
    return (
      <Wrapper>
        <Label isInvalid={isInvalid} >
          {_.startCase(label)}
          <InputField
            type={inputType || 'text'}
            isInvalid={isInvalid}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
        </Label>
        <ErrMsg isInvalid={isInvalid}>{`Please enter a valid ${_.startCase(label)}`}</ErrMsg>
      </Wrapper>
    );
  }
};

export default Input;
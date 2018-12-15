import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme';

const Label = styled.label`
  font-size: 22px;
  line-height: 32px;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`;

const InputField = styled.input`
  width: 100%;
  max-width: 320px;
  height: 55px;
  border: 2px solid ${colors.lightPurple};
  border-radius: 2px;
  outline: none;
  font-size: 22px;
  line-height: 32px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  padding-left: 16px;
  background-color: transparent;
  transition: border 0.35s ease;

  &:focus {
    border: 2px solid ${colors.purple};
  }
`;

class Input extends React.Component { // eslint-disable-line
  render() {
    return (
      <Label>
        <InputField />
      </Label>
    );
  }
};

export default Input;
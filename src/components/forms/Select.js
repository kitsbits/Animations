import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { states } from '../../utils';
import { colors } from '../../theme';
import { Wrapper, Label, ErrMsg } from './styles';

const FauxSelect = styled.div`
  width: 320px;
  height: 55px;
  border: 2px solid ${colors.purple};
  border-radius: none;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const SelectField = styled('select')`
  outline: none;
  border: none;
  height: inherit;
  width: inherit;
  font-size: 22px;
  line-height: 32px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  transform: translateX(-5px);
  background-color: transparent;
`;

export default function Select() {
  return (
    <Wrapper>
      <Label>State</Label>
      <FauxSelect>
        <SelectField>
          {_.map(states, (state) => <option key={state}>{state}</option>)}
        </SelectField>
      </FauxSelect>
      <ErrMsg>Please select a State</ErrMsg>
    </Wrapper>
  )
}
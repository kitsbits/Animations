import React from 'react';
import styled from 'styled-components';

import { colors } from '../theme';
import PBold from './text/PBold';
import Input from './forms/Input';
import Checkbox from './buttons/Checkbox';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 75px;
  max-width: 320px;
`;

const AccentLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  width: 100%;
  background-color: ${colors.lightPurple};
  margin: 25px 0;
`;

const SubmitButton = styled(PBold)`
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  width: 180px;
  height: 45px;
  border-radius: 45px;
  border: 2px solid ${colors.purple};
  color: ${colors.purple};
  cursor: pointer;
  transition: background-color 0.35s ease;

  &:hover {
    background-color: ${colors.lightPurple};
    .no-transition & {
      background-color: transparent;
    }
  }

  .no-transition & {
    transition: none;
  }
`;

const AGREE_TEXT = 'I agree to the terms and conditions';

class Transitions extends React.Component { // eslint-disable-line
  render() {
    return (
      <Wrapper>
        <Column className="no-transition">
          <Input label="first name" />
          <Input label="email" />
          <Input label="password" inputType="password" />
          <AccentLine />
          <Checkbox text={AGREE_TEXT} />
          <AccentLine />
          <SubmitButton>SIGN IN</SubmitButton>
        </Column>
        <Column>
          <Input label="first name" />
          <Input label="email" />
          <Input label="password" inputType="password" />
          <AccentLine />
          <Checkbox text={AGREE_TEXT} />
          <AccentLine />
          <SubmitButton>SIGN IN</SubmitButton>
        </Column>
      </Wrapper>
    );
  }
};

export default Transitions;
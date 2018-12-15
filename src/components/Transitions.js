import React from 'react';
import styled from 'styled-components';

import Input from './forms/Input';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Transitions extends React.Component { // eslint-disable-line
  render() {
    return (
      <Wrapper>
        <Input />
      </Wrapper>
    );
  }
};

export default Transitions;
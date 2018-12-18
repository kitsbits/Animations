import React from 'react';
import _ from 'lodash';

import {
  Wrapper,
  Label,
  InputField,
  ErrMsg,
} from './styles';

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
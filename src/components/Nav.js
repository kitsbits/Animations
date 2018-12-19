import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../theme';
import _ from 'lodash';

import PDefault from '../components/text/PDefault';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(32px, 130px);
  transition: transform 0.35s ease;
  user-select: none;

  ${media.navBreak`
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    transform: translate(32px, -40px);
    align-self: center;
  `}
`;

const Item = styled(PDefault)`
  font-size: 19px;
  line-height: 24px;
  color: ${colors.purple};
  margin: 0 0 12px;
  cursor: pointer;
  transition: transform 0.35s ease;

  &:hover {
    transform: translateX(5px);
  }

  ${media.navBreak`
    margin: 0 12px 12px;
  `}
`;

class Nav extends React.Component {
  renderNavItems = (items, onClick) => (
    _.map(items, (item) => (
      <Item
        key={item}
        onClick={() => onClick(item)}
      >
        {item}
      </Item>
    ))
  )

  render() {
    const { items, onClick } = this.props;
    return (
      <Wrapper className="nav">
        {this.renderNavItems(items, onClick)}
      </Wrapper>
    );
  }
}

export default Nav;
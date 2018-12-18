/**
*
* Dropdown
*
*/

import React from 'react';
import styled from 'styled-components';
import { TweenMax, TimelineMax, Sine } from 'gsap';
import _ from 'lodash';

import { states } from '../../utils';
import { colors } from '../../theme';
import PDefault from '../text/PDefault';
import {
  Wrapper,
  Label,
  ErrMsg,
  InputField,
} from './Input';

const FieldWrapper = styled(Wrapper)`
  z-index: 1;
`;

const Select = styled(InputField)``;

export const CaretWrapper = styled.div`
  position: absolute;
  height: 32px;
  width: 32px;
  right: 10px;
  cursor: pointer;
  top: 50%;
  right: 20px;

  &:before {
    content: '';
    position: absolute;
    height: 21px;
    width: 3px;
    top: 7px;
    right: 8px;
    background-color: ${colors.lightPurple};
    transform: rotate(45deg);
  }

  &:after {
    content: '';
    position: absolute;
    height: 21px;
    width: 3px;
    top: 7px;
    left: 8px;
    background-color: ${colors.lightPurple};
    transform: rotate(-45deg);
  }
`;

const CarouselWrapper = styled.div`
  position: absolute;
  width: inherit;
  overflow: hidden;
  left: 0;
  user-select: none;
  background-color: white;
  width: 100%;
`;

const CarouselItem = styled(PDefault)`
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => props.isSelected || props.isHighlighted ? colors.purple : colors.darkGrey};
  cursor: pointer;

  &:hover {
    color: ${colors.purple};
  }
`;

const CarouselScroller = styled.div`
  width: calc(100% + 20px);
  overflow: scroll;
  padding: ${(props) => props.isEmpty ? 0 : 13}px 0 0 16px;
`;

const MAX_HEIGHT = 250;
const ESC = 27;
const ENTER = 13;
const TAB = 9;
const DOWN = 40;
const UP = 38;
const DURATION = 0.65;
const EASE = Sine.easeInOut;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currentIndex: -1,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    this.height = Math.min(this.contentRef.clientHeight, MAX_HEIGHT);
    this.willScroll = this.height === MAX_HEIGHT;

    const openCallback = () => window.addEventListener('click', this.checkClick);
    const closedCallback = () => {
      window.removeEventListener('click', this.checkClick);
      this.reset();
    };
    this.animateOpen = new TimelineMax({
      paused: true,
      onComplete: openCallback,
      onReverseComplete: closedCallback,
    })
      .addLabel('start')
      .fromTo(this.caretRef, DURATION, { rotationX: 0 }, { rotationX: 180 }, 'start')
      .fromTo(this.selectRef, 0.25, { border: `2px solid ${colors.lightPurple}` }, { border: `2px solid ${colors.purple}` }, 'start')
      .fromTo([this.contentRef, this.contentWrapperRef], DURATION, { maxHeight: 0 }, { maxHeight: this.height, ease: EASE }, 'start');
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (currentIndex !== prevState.currentIndex) {
      const scrollTop = currentIndex > -1 ? (this.contentRef.children[currentIndex].offsetTop - 133) : 0;
      TweenMax.to(this.contentRef, 0.35, { scrollTop, ease: Sine.easeInOut });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('click', this.checkClick);
  }

  onKeyDown = (event) => {
    const { currentIndex } = this.state;

    if (this.isOpen) {
      if (event.which === ENTER) {
        if (this.itemHighlighted >= 0) {
          const item = states[this.itemHighlighted];
          this.onSelect(item);
        }
      }

      if (event.which === ESC) {
        this.closeDropdown(false);
      }

      if (event.which === TAB) {
        this.closeDropdown();
      }

      if (event.which === UP) {
        event.preventDefault();
        this.goToNext(states, currentIndex, -1);
      }

      if (event.which === DOWN) {
        event.preventDefault();
        this.goToNext(states, currentIndex, 1);
      }
    }
  }

  onSelect = (value) => {
    this.setState({ value });
    this.closeDropdown();
  }

  toggleDropdown = () => {
    if (!this.isOpen) {
      return this.openDropdown();
    }
    return this.closeDropdown();
  }

  openDropdown = () => {
    if (!this.isOpen) {
      this.isOpen = true;
      this.animateOpen.restart().play();
    }
  }

  closeDropdown = () => {
    if (this.isOpen) {
      this.isOpen = false;
      this.animateOpen.play().reverse();
    }
  }

  reset = () => {
    this.setState({ currentIndex: -1 });
  }

  goToNext = (items, currentIndex, increment) => {
    let nextIndex = currentIndex + increment;
    if (!items[nextIndex] || nextIndex < 0) {
      nextIndex = 0;
    }
    this.setState({ currentIndex: nextIndex });
  }

  checkClick = (event) => {
    if (event.target === this.caretRef) {
      return;
    }
    if ((event.target !== this.selectRef) && this.isOpen) {
      this.closeDropdown();
    }
    if ((event.target === this.selectRef) && !this.isOpen) {
      this.openDropdown();
    }
  }

  renderCarouselItems = (items, value, currentIndex, onSelect) => {
    this.itemHighlighted = -1;
    return _.map(items, (item, i) => {
      const isSelected = item === value;
      const isHighlighted = currentIndex === i;
      if (isHighlighted) this.itemHighlighted = i;

      const onClick = () => onSelect(item);
      return (
        <CarouselItem
          key={item}
          isSelected={isSelected}
          isHighlighted={isHighlighted}
          onClick={onClick}
        >
          {item}
        </CarouselItem>
      );
    });
  }

  render() {
    const { value, currentIndex } = this.state;

    return (
      <FieldWrapper>
        <Label>State</Label>
        <Select
          ref={(ref) => { this.selectRef = ref; }}
          value={value}
          disabled
        />
        <ErrMsg>Error Message</ErrMsg>
        <CaretWrapper
          ref={(ref) => { this.caretRef = ref; }}
          onClick={this.toggleDropdown}
        />
        <CarouselWrapper ref={(ref) => { this.contentWrapperRef = ref; }} >
          <CarouselScroller ref={(ref) => { this.contentRef = ref; }}>
            {this.renderCarouselItems(states, value, currentIndex, this.onSelect)}
          </CarouselScroller>
        </CarouselWrapper>
      </FieldWrapper>
    );
  }
}

export default Dropdown;

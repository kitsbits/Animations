import styled from 'styled-components';
import PDefault from './text/PDefault';
import PBold from './text/PBold';
import { colors } from '../theme';

export const WordsWrapper = styled.article`
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;

  &:not(:last-child) {
    margin: 0 auto 75px;
    padding-bottom: 0;
    border-bottom: 1px solid ${colors.darkGrey};
  }
`;

export const BigWords = styled(PBold)`
  font-size: 30px;
  line-height: 32px;
  margin-bottom: 25px;
`;

export const LittleWords = styled(PDefault)`
  margin-bottom: 75px;
`;

export const MediumWords = styled(PDefault)`
  margin-bottom: 25px;
`;

export const LittlerWords = styled(PDefault)`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 17px;
  padding-left: 35px;
  position: relative;
  max-width: 720px;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 15px;
    height: 6px;
    width: 6px;
    border-radius: 17px;
    background-color: ${colors.purple};
  }

  &:last-of-type {
    margin-bottom: 50px;
  }
`;

export const A = styled('a')`
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  color: ${colors.purple};
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${colors.purple};
    transform: translateX(-50%);
    transition: width 0.35s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
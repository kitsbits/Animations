import { css } from 'styled-components';

export const colors = {
  lightGrey: '#EEEEEE',
  darkGrey: '#4A4A4A',
  lightPurple: '#E5C8FB',
  purple: '#A450E3',
  orange: '#F5A623',
};

export const barColors = [
  '#013B7E',
  '#2C69AF',
  '#4A90E2',
  '#A3CAF8',
];

export const media = {
  navBreak: (...args) => css`
    @media (max-width: 1350px) {
      ${css(...args)}
    }
  `,
}


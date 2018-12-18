import styled from 'styled-components';
import PDefault from './text/PDefault';
import PBold from './text/PBold';
import { colors } from '../theme';

export const WordsWrapperBase = styled.article`
  max-width: 80%;
  margin: 0 auto 75px;
  border-bottom: 1px solid ${colors.darkGrey};
`;

export const BigWords = styled(PBold)`
  font-size: 30px;
  line-height: 32px;
  margin-bottom: 25px;
`;

export const LittleWords = styled(PDefault)`
  margin-bottom: 75px;
`;
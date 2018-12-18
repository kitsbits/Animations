import styled from 'styled-components';
import PDefault from './text/PDefault';
import PBold from './text/PBold';

export const BigWords = styled(PBold)`
  font-size: 30px;
  line-height: 32px;
  margin-bottom: 25px;
`;

export const LittleWords = styled(PDefault)`
  margin-bottom: 75px;
`;
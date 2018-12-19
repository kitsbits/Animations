import { keyframes } from 'styled-components';
import _ from 'lodash';

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

// form data
export const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const letters = ['A','B','C','D','E','F'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
export const available = _.concat(letters, numbers);
export const colors = _.map(_.range(100), () => {
  return `#${_.join(_.map(_.range(6), () => _.sample(available)), '')}`;
});

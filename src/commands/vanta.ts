import { CommandDefinition } from '../types';
import { QUERY } from '.';

export const vanta: () => CommandDefinition[] = () => [
  {
    template: `v${QUERY}`,
    toUrl: ({ query }) =>
      `https://app.vanta.com/${query ? `/search?q=${query}` : ''}`,
    example: 'v Vanta Home Page',
    desc: 'Just go to the Vanta App Home page.',
  },
  {
    template: `opp${QUERY}`,
    toUrl: ({ query }) =>
      `https://vanta.lightning.force.com/lightning/r/Opportunity/${query ? `${query}/view` : ''}`,
    example: 'opp ABCDEFGHI',
    desc: 'Takes you to a specific opportunity in sfdc'
  },  
];

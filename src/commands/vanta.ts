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
];

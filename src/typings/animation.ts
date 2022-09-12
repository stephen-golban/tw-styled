import { CommonMSNumbers } from './global';

export type Ease = 'linear' | 'in' | 'out' | 'in-out' | `custom-${string}`;

export type Duration = CommonMSNumbers | 'duration' | `xd[${number}]`;

export type Delay = CommonMSNumbers;

export type Transition =
  | 'none'
  | 'all'
  | 'transition'
  | 'colors'
  | 'opacity'
  | 'shadow'
  | 'transform';

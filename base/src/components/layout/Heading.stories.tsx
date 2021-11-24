import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Heading} from './Heading';

const meta: Meta = {
  title: 'Base/Layout/Heading',
  component: Heading,
};

export const Level1: VFC = () => <Heading level={1}>Heading Level 1</Heading>;
export const Level2: VFC = () => <Heading level={2}>Heading Level 2</Heading>;
export const Level3: VFC = () => <Heading level={3}>Heading Level 3</Heading>;
export const Level4: VFC = () => <Heading level={4}>Heading Level 4</Heading>;
export const Level5: VFC = () => <Heading level={5}>Heading Level 5</Heading>;
export const Level6: VFC = () => <Heading level={6}>Heading Level 6</Heading>;
export const All: VFC = () => (
  <>
    <Heading level={1}>Heading Level 1</Heading>
    <Heading level={2}>Heading Level 2</Heading>
    <Heading level={3}>Heading Level 3</Heading>
    <Heading level={4}>Heading Level 4</Heading>
    <Heading level={5}>Heading Level 5</Heading>
    <Heading level={6}>Heading Level 6</Heading>
  </>
);
export default meta;

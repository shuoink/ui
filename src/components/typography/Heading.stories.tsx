import type {FC} from 'react';
import Heading from './Heading.js';

const meta = {
  title: 'Base/Typography/Heading',
  component: Heading,
};

export const Level1: FC = () => <Heading level={1}>Heading Level 1</Heading>;
export const Level2: FC = () => <Heading level={2}>Heading Level 2</Heading>;
export const Level3: FC = () => <Heading level={3}>Heading Level 3</Heading>;
export const Level4: FC = () => <Heading level={4}>Heading Level 4</Heading>;
export const Level5: FC = () => <Heading level={5}>Heading Level 5</Heading>;
export const Level6: FC = () => <Heading level={6}>Heading Level 6</Heading>;
export const All: FC = () => (
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

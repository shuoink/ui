import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Hyperlink as Link} from './Hyperlink';

const meta: Meta = {
  title: 'Components/Navigation/Hyperlink',
  component: Link,
};

export const Hyperlink: VFC = () => (
  <p>
    Text Text Text{' '}
    <Link href="#" onClick={e => e.preventDefault()}>
      Link Link Link
    </Link>{' '}
    Text Text Text
  </p>
);

export default meta;

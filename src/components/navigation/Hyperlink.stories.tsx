import type {FC} from 'react';
import Link from './Hyperlink.js';

const meta = {
  title: 'Base/Navigation/Hyperlink',
  component: Link,
};

export const Hyperlink: FC = () => (
  <p>
    Text Text Text{' '}
    <Link href="#" onClick={e => e.preventDefault()}>
      Link Link Link
    </Link>{' '}
    Text Text Text
  </p>
);

export default meta;

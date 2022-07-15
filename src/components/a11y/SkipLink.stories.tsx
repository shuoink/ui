import type {FC} from 'react';
import {SkipLink as SkipLinkComponent} from './SkipLink.js';

const meta = {
  title: 'Base/A11y/SkipLink',
  component: SkipLinkComponent,
};

export const SkipLink: FC = () => (
  <>
    <SkipLinkComponent href="#main">SkipLink Text</SkipLinkComponent>
    <p>
      skipped content (NOTE: you cannot see the skip link as it's actually
      intended for screen readers only)
    </p>
    <main id="main">main content</main>
  </>
);

export default meta;

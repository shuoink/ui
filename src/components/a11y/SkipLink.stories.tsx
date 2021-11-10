import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {SkipLink as SkipLinkComponent} from './SkipLink';

const meta: Meta = {
  title: 'Components/A11y/SkipLink',
  component: SkipLinkComponent,
};

export const SkipLink: VFC = () => (
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

import type {FC} from 'react';
import {LinkButton as LinkButtonComponent} from './LinkButton.js';

const meta = {
  title: 'Base/Buttons/Link Button',
  component: LinkButtonComponent,
};

export const LinkButton: FC = () => (
  <>
    I've got some peaches for sale!{' '}
    <LinkButtonComponent>Get you some!</LinkButtonComponent> They're running out
    quick!
  </>
);

export default meta;

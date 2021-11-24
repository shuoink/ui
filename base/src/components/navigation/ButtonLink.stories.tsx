import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {ButtonLink as ButtonLinkComponent} from './ButtonLink';

const meta: Meta = {
  title: 'Base/Navigation/ButtonLink',
  component: ButtonLinkComponent,
};

export const ButtonLink: VFC = () => (
  <>
    <ButtonLinkComponent>ButtonLink Text</ButtonLinkComponent>
  </>
);

export default meta;

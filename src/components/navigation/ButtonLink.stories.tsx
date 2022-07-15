import type {FC} from 'react';
import {ButtonLink as ButtonLinkComponent} from './ButtonLink.js';

const meta = {
  title: 'Base/Navigation/ButtonLink',
  component: ButtonLinkComponent,
};

export const ButtonLink: FC = () => (
  <>
    <ButtonLinkComponent>ButtonLink Text</ButtonLinkComponent>
  </>
);

export default meta;

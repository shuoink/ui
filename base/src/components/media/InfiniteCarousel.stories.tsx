import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {ShuoinkLogo} from '../images/ShuoinkLogo';
import {InfiniteCarousel as Component} from './InfiniteCarousel';

const meta: Meta = {
  title: 'Base/Media/Infinite Carousel',
  component: Component,
};

export const InfiniteCarousel: VFC = () => (
  <Component>
    <ShuoinkLogo />
    <ShuoinkLogo />
    <ShuoinkLogo />
    <ShuoinkLogo />
    <ShuoinkLogo />
  </Component>
);

export default meta;

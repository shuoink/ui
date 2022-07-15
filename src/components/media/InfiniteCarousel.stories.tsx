import type {FC} from 'react';
import {ShuoinkLogo} from '../images/ShuoinkLogo.js';
import {InfiniteCarousel as Component} from './InfiniteCarousel.js';

const meta = {
  title: 'Base/Media/Infinite Carousel',
  component: Component,
};

export const InfiniteCarousel: FC = () => (
  <Component>
    <ShuoinkLogo />
    <ShuoinkLogo />
    <ShuoinkLogo />
    <ShuoinkLogo />
    <ShuoinkLogo />
  </Component>
);

export default meta;

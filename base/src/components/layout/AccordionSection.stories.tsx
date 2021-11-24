import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {AccordionSection as Component} from './AccordionSection';

const meta: Meta = {
  title: 'Base/Layout/Accordion Section',
  component: Component,
};

export const AccordionSection: VFC = () => (
  <Component heading="Title">
    {'This is a AccordionSection. '.repeat(20)}
  </Component>
);

export default meta;

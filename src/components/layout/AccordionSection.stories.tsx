import type {FC} from 'react';
import Component from './AccordionSection.js';

const meta = {
  title: 'Base/Layout/Accordion Section',
  component: Component,
};

export const AccordionSection: FC = () => (
  <Component heading="Title">
    {'This is a AccordionSection. '.repeat(20)}
  </Component>
);

export default meta;

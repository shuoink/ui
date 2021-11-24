import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Accordion as Component} from './Accordion';
import {AccordionSection} from './AccordionSection';

const meta: Meta = {
  title: 'Base/Layout/Accordion',
  component: Component,
};

const CONTENT = 'This is a Accordion. '.repeat(20);

export const Accordion: VFC = () => (
  <Component>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
  </Component>
);

export default meta;

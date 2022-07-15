import type {FC} from 'react';
import Component from './Accordion.js';
import AccordionSection from './AccordionSection.js';

const meta = {
  title: 'Base/Layout/Accordion',
  component: Component,
};

const CONTENT = 'This is a Accordion. '.repeat(20);

export const Accordion: FC = () => (
  <Component>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
    <AccordionSection heading="Title">{CONTENT}</AccordionSection>
  </Component>
);

export default meta;

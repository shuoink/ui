import type {FC} from 'react';
import {Heading} from '../typography/Heading.js';
import {Section} from './Section.js';

const meta = {
  title: 'Base/Layout/Section',
  component: Section,
};

export const SectionsAndHeadings: FC = () => (
  <Section className="border border-gray-900 dark:border-gray-100 p-2">
    <header>
      <Heading>Heading</Heading>
    </header>
    <Section className="border border-gray-900 dark:border-gray-100 p-2">
      <header>
        <Heading>Heading</Heading>
      </header>
      <Section className="border border-gray-900 dark:border-gray-100 p-2">
        <header>
          <Heading>Heading</Heading>
        </header>
        <Section className="border border-gray-900 dark:border-gray-100 p-2">
          <header>
            <Heading>Heading</Heading>
          </header>
          <Section className="border border-gray-900 dark:border-gray-100 p-2">
            <header>
              <Heading>Heading</Heading>
            </header>
            <Section className="border border-gray-900 dark:border-gray-100 p-2">
              <header>
                <Heading>Heading</Heading>
              </header>
              <Section className="border border-gray-900 dark:border-gray-100 p-2">
                <header>
                  <Heading>Heading</Heading>
                </header>
              </Section>
              <header>
                <Heading>Heading</Heading>
              </header>
            </Section>
            <header>
              <Heading>Heading</Heading>
            </header>
          </Section>
          <header>
            <Heading>Heading</Heading>
          </header>
        </Section>
        <header>
          <Heading>Heading</Heading>
        </header>
      </Section>
      <header>
        <Heading>Heading</Heading>
      </header>
    </Section>
    <header>
      <Heading>Heading</Heading>
    </header>
  </Section>
);

export default meta;

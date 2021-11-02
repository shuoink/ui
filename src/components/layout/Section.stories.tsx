import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Heading} from './Heading';
import {Section} from './Section';

const meta: Meta = {
  title: 'Components/Layout/Section',
  component: Section,
};

export const SectionsAndHeadings: VFC = () => (
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

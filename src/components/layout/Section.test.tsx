/** @jest-environment jsdom */
import {render, cleanup} from '@testing-library/react';
import Heading from '../typography/Heading.js';
import Section from './Section.js';

afterEach(cleanup);

test('increments heading level each time it is nested', () => {
  const {container} = render(
    <Section>
      <Heading />
      <Section>
        <Heading />
        <Section>
          <Heading />
          <Section>
            <Heading />
            <Section>
              <Heading />
              <Section>
                <Heading />
                <Section>
                  <Heading />
                </Section>
                <Heading />
              </Section>
              <Heading />
            </Section>
            <Heading />
          </Section>
          <Heading />
        </Section>
        <Heading />
      </Section>
      <Heading />
    </Section>,
  );

  type TagDescriptor = {name: string; children: Array<TagDescriptor>};
  const getTags = (el: HTMLElement): TagDescriptor => {
    return {
      name: el.tagName,
      children: [...el.childNodes]
        .filter(
          (element): element is HTMLElement =>
            element.nodeType === Node.ELEMENT_NODE,
        )
        .map(getTags),
    };
  };
  const stringifyTag = (tag: TagDescriptor): string => {
    if (tag.children.length === 0) {
      return tag.name;
    }
    return `${tag.name}\n${tag.children
      .map((child): string =>
        stringifyTag(child)
          .split('\n')
          .map(line => `  ${line}`)
          .join('\n'),
      )
      .join('\n')}`;
  };

  expect(stringifyTag(getTags(container))).toMatchInlineSnapshot(`
    "DIV
      SECTION
        H1
        SECTION
          H2
          SECTION
            H3
            SECTION
              H4
              SECTION
                H5
                SECTION
                  H6
                  SECTION
                    H6
                  H6
                H5
              H4
            H3
          H2
        H1"
  `);
});

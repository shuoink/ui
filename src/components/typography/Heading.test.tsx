/** @jest-environment jsdom */
import {render, cleanup} from '@testing-library/react';
import {Section} from '../layout/Section.js';
import {Heading} from './Heading.js';

afterEach(cleanup);

test('renders w/ appropriate level automagically', () => {
  const {container} = render(
    <Section level={5}>
      <Heading />
    </Section>,
  );
  expect(container.querySelector('h5')).not.toBeNull();
});

test('renders w/ given level if provided, regardless of heading context', () => {
  const {container} = render(
    <Section level={5}>
      <Heading level={3} />
    </Section>,
  );
  expect(container.querySelector('h3')).not.toBeNull();
});

test("renders w/ level:1 if there's no level prop or heading context", () => {
  const {container} = render(<Heading />);
  expect(container.firstElementChild?.tagName).toBe('H1');
});

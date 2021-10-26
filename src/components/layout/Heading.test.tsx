/** @jest-environment jsdom */
import {render, cleanup} from '@testing-library/react';
import Heading from './Heading';
import Section from './Section';

afterEach(cleanup);

test('renders w/ appropriate level automagically', () => {
  const {container} = render(
    <Section level={5}>
      <Heading />
    </Section>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <section>
      <h5
        class="text-headings text-2xl"
      />
    </section>
  `);
});

test('renders w/ given level if provided, regardless of heading context', () => {
  const {container} = render(
    <Section level={5}>
      <Heading level={1} />
    </Section>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <section>
      <h1
        class="text-headings text-6xl"
      />
    </section>
  `);
});

test("renders w/ level:1 if there's no level prop or heading context", () => {
  const {container} = render(<Heading />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1
      class="text-headings text-6xl"
    />
  `);
});

/** @jest-environment jsdom */
import {render, cleanup} from '@testing-library/react';
import {Heading} from './Heading';
import {Section} from './Section';

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
  expect(container.firstChild).toMatchInlineSnapshot(`
    <section>
      <h1
        class="text-headings dark:text-headings-dark text-6xl"
      />
      <section>
        <h2
          class="text-headings dark:text-headings-dark text-5xl"
        />
        <section>
          <h3
            class="text-headings dark:text-headings-dark text-4xl"
          />
          <section>
            <h4
              class="text-headings dark:text-headings-dark text-3xl"
            />
            <section>
              <h5
                class="text-headings dark:text-headings-dark text-2xl"
              />
              <section>
                <h6
                  class="text-headings dark:text-headings-dark text-xl"
                />
                <section>
                  <h6
                    class="text-headings dark:text-headings-dark text-xl"
                  />
                </section>
                <h6
                  class="text-headings dark:text-headings-dark text-xl"
                />
              </section>
              <h5
                class="text-headings dark:text-headings-dark text-2xl"
              />
            </section>
            <h4
              class="text-headings dark:text-headings-dark text-3xl"
            />
          </section>
          <h3
            class="text-headings dark:text-headings-dark text-4xl"
          />
        </section>
        <h2
          class="text-headings dark:text-headings-dark text-5xl"
        />
      </section>
      <h1
        class="text-headings dark:text-headings-dark text-6xl"
      />
    </section>
  `);
});

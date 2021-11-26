/** @jest-environment jsdom */
import {render, screen} from '@testing-library/react';
import {composeStories} from '@storybook/testing-react';
import * as stories from './Disclaimer.stories';

const {Disclaimer} = composeStories(stories);

test('renders', () => {
  render(<Disclaimer />);
  expect(screen.getByText('Stuff and such')).toMatchInlineSnapshot(`
    <div
      class="text-xs text-gray-600 dark:text-gray-400"
    >
      Stuff and such
    </div>
  `);
});

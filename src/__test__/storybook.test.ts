/** @jest-environment jsdom */
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  test: imageSnapshot({
    getMatchOptions: ({context: {fileName}}: any) => ({
      customSnapshotsDir: path.join(
        'src',
        path.dirname(fileName as string),
        '__snapshots__',
      ),
    }),
  }),
});

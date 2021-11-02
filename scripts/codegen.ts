import path from 'path';
import fs from 'fs';
import globby from 'globby';
import pushpop from '@spudly/pushpop';

const {unique} = pushpop;

const createIndexFile = async () => {
  const files = await globby(['**/*.{ts,tsx}'], {
    cwd: 'src',
    ignore: [
      'pages/**',
      'demo/**',
      'utils/**',
      '**/index.{ts,tsx}',
      '**/*.test.*',
      '**/*.stories.*',
    ],
  });

  const exportedPaths: Array<string> = [];
  files.forEach(file => {
    const extension = path.extname(file);
    exportedPaths.push(file.slice(0, -extension.length));
  });

  const content = [
    '// generated. do not edit.',
    ...unique(
      exportedPaths
        .map(exportedPath => `export * from './${exportedPath}';`)
        .sort(),
    ),
  ].join('\n');
  await fs.promises.writeFile('src/index.ts', content);
  process.stdout.write(`✅ src/index.ts\n${content}\n\n`);
};

(async () => {
  await createIndexFile();
})().catch((error: Error) =>
  process.stderr.write(error.stack ?? error.message),
);

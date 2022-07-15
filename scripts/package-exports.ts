import path from 'path';
import fs from 'fs';
import cp from 'child_process';
import {promisify} from 'util';
import {globby} from 'globby';

const exec = promisify(cp.exec);

const stage = process.argv.includes('--stage');

const files = await globby(['**/*.{js,cjs,mjs}'], {
  cwd: 'dist',
  ignore: ['_internal/**', '**/*.test.*', '**/*.stories.*'],
});

const pkgExports: {[key: string]: {types: string; default: string}} = {};
files.forEach(file => {
  const ext = path.extname(file);
  const shortName = `./${path.basename(file, ext)}`;
  if (shortName in pkgExports) {
    throw new Error(`Name Collision: ${shortName}`);
  }
  pkgExports[shortName] = {
    types: `./dist/${file.replace(ext, '.d.ts')}`,
    default: `./dist/${file}`,
  };
});

pkgExports['./tailwind-preset'] = {
  types: './tailwind-preset.d.ts',
  default: './tailwind-preset.cjs',
};

const sortedPkgExports = Object.fromEntries(
  [...Object.entries(pkgExports)].sort(([a], [b]) => {
    return a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0;
  }),
);

const pkg = JSON.parse(await fs.promises.readFile('./package.json', 'utf-8'));

pkg.exports = sortedPkgExports;

await fs.promises.writeFile('./package.json', JSON.stringify(pkg, null, 2));
if (stage) {
  await exec('git add package.json');
  process.stdout.write(`✅ updated & staged ./package.json\n\n`);
} else {
  process.stdout.write(`✅ updated ./package.json\n\n`);
}

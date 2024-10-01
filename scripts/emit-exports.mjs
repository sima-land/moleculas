import fs from 'node:fs/promises';
import path from 'node:path';
import glob from 'fast-glob';

const paths = await glob(
  [
    //
    './src/{common,desktop,mobile}/components/*/index.{js,jsx,ts,tsx}',
    './src/{common,desktop,mobile}/hooks/index.{js,jsx,ts,tsx}',
    './src/**/*.scss',
  ],
  {
    ignore: [
      //
      './src/**/*.m.scss',
      './src/**/_*.scss',
    ],
  },
);

const data = Object.fromEntries(
  paths
    .sort()
    .map(p => [
      `./${path.relative('src', p).replace(/\/index\.(js|jsx|ts|tsx)$/g, '')}`,
      `./${path.relative('src', p).replace(/\.(js|jsx|ts|tsx)$/g, '.js')}`,
    ]),
);

const outputPath = path.resolve(process.cwd(), 'temp/exports.json');

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, JSON.stringify(data, null, 2), 'utf-8');

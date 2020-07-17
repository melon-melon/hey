## clean

Cleans the 11ty build folder.

```bash
npx rimraf _site
```

## serve:webpack

Serve webpack assets in development mode.

```bash
npx webpack --mode development --watch
```

## serve:eleventy

Serve 11ty assets in development mode.

```bash
ELEVENTY_ENV=development npx eleventy --serve
```

## dev:eleventy

```bash
EVELENTY_ENV=development npx eleventy
```

## dev:webpack

```bash
npx webpack --mode development
```

## serve

Run task `clean` before this.

```bash
npx maid dev:webpack
npx maid dev:eleventy
```

Run task `serve:webpack` after this.
Run task `serve:eleventy` in parallel after this.

## build:webpack

Build webpack assets in production mode.

```bash
npx webpack --mode production
```

## build:eleventy

Build eleventy assets in production mode.

```bash
ELEVENTY_ENV=production npx eleventy
```

## build

Run task `clean` before this.
Run task `build:webpack`.
Run task `build:eleventy` after this.
Run task `build:webpack` after this.

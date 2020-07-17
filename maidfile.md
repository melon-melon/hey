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

## serve

Run task `clean` before this.
Run task `serve:webpack` and `serve:eleventy` in parallel.

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
Run task `build:eleventy`.
Run task `build:webpack` after this.

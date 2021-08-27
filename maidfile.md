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
ELEVENTY_ENV=development npx @11ty/eleventy --serve
```

## dev:eleventy

```bash
EVELENTY_ENV=development npx @11ty/eleventy
```

## serve

Run task `clean` before this.

```bash
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
ELEVENTY_ENV=production npx @11ty/eleventy
```

## build

Run task `clean` before this.
Run task `build:eleventy`.
Run task `build:webpack` after this.

# detect-edges

[![Package version](https://flat.badgen.net/npm/v/detect-edges)](https://www.npmjs.com/package/detect-edges)
[![Package size](https://flat.badgen.net/bundlephobia/minzip/detect-edges)](https://bundlephobia.com/result?p=detect-edges)

Smartly detect edges of an image.


## Installation

    npm install detect-edges


## Usage

```js
import detect from "detect-edges";

// Browser
const canvas = document.createElement("canvas");

// Node
import Canvas from "canvas";
const canvas = Canvas.createCanvas(800, 600);

const context = canvas.getContext("2d");
// Edit the canvas' context
// ...

const { left, top, right, bottom } = detect(canvas);
```


## Documentation

### `detect(canvas, [options])`

| Name    | Type                | Default  | Comment                |
|---------|---------------------|----------|------------------------|
| canvas  | `HTMLCanvasElement` | required | Tainted canvas element |
| options | `Options`           |          | see below              |

### `options`

| Name      | Type     | Default | Comment                                                                                                                    |
|-----------|----------|---------|----------------------------------------------------------------------------------------------------------------------------|
| tolerance | `Number` | `0`     | Level of tolerance for the transparency between 0 and 1 (0 mean no tolerance, 1 mean everything is treated as transparent) |


## Related

 - If you want to crop an image in Node.js, use [`crop-node`](https://github.com/GMartigny/crop-node)
 - If you want to crop an image using your terminal, use [`crop-node-cli`](https://github.com/GMartigny/crop-node-cli)
 - If you want to crop an image in the browser, use [`crop-browser`](https://github.com/GMartigny/crop-browser)


## License

[MIT](license)

# polymer-panzoom
Panning/zooming web component utilizing CSS3 transforms, built with [Polymer](https://www.polymer-project.org)

## Run the Demo

```bash
npm install
npm start
```

Then navigate a browser to [http://localhost:8080/](http://localhost:8080/)

To serve the demo on a different port:

```bash
npm start -- --port=8081
```

## Usage

### Setting up Dependencies

Serve Polymer at root, i.e. `/polymer`.

The [web-components polyfill](https://github.com/webcomponents/webcomponentsjs) is required by Polymer, so ensure that it's included, for example with a `<script>` tag:

```html
<script src="webcomponentsjs/webcomponents-lite.min.js"></script>
```

If using `polymer-panzoom` as a [bower](https://bower.io/) component, the contents of the bower components directory could be served at root, such that `/polymer` `/webcomponentsjs` are accesible.

### Using the Component

Import `polymer-panzoom` with a `<link>` tag:

```html
<link rel="import" href="panzoom.html">
```

`polymer-panzoom` elements can now be used in the page to wrap other elements for panning/zooming. For example:

```html
<polymer-panzoom id="my-panzoom">
  <img src="big-image-to-be-zoomed-and-panned.jpg">
</polymer-panzoom>
```

Panning/zooming parameters can then be applied, for example:

```javascript
var myPanzoom = document.getElementById('my-panzoom');
myPanzoom.panOffset({x: 100, y: 150});
myPanzoom.zoomOffset(0.1);
```

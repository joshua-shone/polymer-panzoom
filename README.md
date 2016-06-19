# polymer-panzoom
Panning/zooming web component utilizing CSS3 transforms, built with [Polymer](https://www.polymer-project.org)

## To run the demo

```bash
npm install
bower install
node demo.js --port 8080
```

Then navigate a browser to [http://localhost:8080/](http://localhost:8080/)

## Usage

To use `polymer-panzoom` as a [bower](https://bower.io/) component, ensure that the contents of the bower components directory is being served at the root directory, such that `/polymer/` is accessible.

The [web-components polyfill](https://github.com/webcomponents/webcomponentsjs) is required by Polymer, so ensure that it's included, for example with a `<script>` tag:

```html
<script src="webcomponentsjs/webcomponents-lite.min.js"></script>
```

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
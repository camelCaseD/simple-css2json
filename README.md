# CSS2JSON
---
####This is a simple javascript parser that converts the inline css of an element into a json object.
---
## Usage
1. Download css2json.js
2. Next include it in your html `<script type="text/javascript" src="css2json.js"></script>`
3. Now simply call `css2json()` in your javascript but make sure to pass an element as the argument.

## Example
```html
<!doctype html>
<html>
<head>
  <title>CSS 2 JSON Demo</title>
  <script type="text/javascript" src="css2json.js"></script>
</head>
<body>
  <div id="inlineCSSEl" style="border: 2px solid black;font-size: 14px;height: 15px;">Hello World!</div>
  <div id="result"></div>

  <script type="text/javascript">
    var el = document.getElementById("inlineCSSEl")
    var cssJson = css2json(el)
    document.getElementById("result").innerHTML = "Results: "+JSON.stringify(cssJson)
  </script>
</body>
</html>
```
Or take a look at the demo.html for yourself.

css2json = function(el) {
  var cssText = el.style.cssText;
  cssText = cssText.replace(/: /g, ":").replace(/; /g, ";");

  var cssArray = cssText.split(";");
  if (cssArray[cssArray.length - 1] === "") {
    cssArray.pop();
  }

  var cssJson = {};
  for (var i = 0;i < cssArray.length;i++) {
    var css = cssArray[i];
    css = css.split(":");
    cssJson[css[0]] = css[1];
  }

  return cssJson;

};

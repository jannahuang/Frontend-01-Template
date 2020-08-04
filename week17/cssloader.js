let css = require('css')

module.exports = function (source, map) {

  let stylesheet = css.parse(source);

  let name = this.resourcePath.match(/([^/]+).css$/)[1];
  console.log(name)

  for(let rule of stylesheet.stylesheet.rules) {
    rule.selectors = rule.selectors.map(selector => ".carousel" + selector);
  }

  console.log(css.stringify(stylesheet));

  return '';
}

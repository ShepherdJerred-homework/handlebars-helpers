const tokens = require('./tokens');

function copyright (name, options) {
  return '&copy;' + new Date().getFullYear() + ' ' + name;
}

function codeblock (options) {
  let htmlPreStart = '<pre class="codeblock">';
  let htmlPreContent = tokens(options.fn(this));
  let htmlPreEnd = '</pre>';
  return htmlPreStart + htmlPreContent + htmlPreEnd;
}

module.exports = {
  codeblock,
  copyright
};

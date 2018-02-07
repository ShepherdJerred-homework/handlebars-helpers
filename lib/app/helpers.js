function copyright(name, options) {
  return '&copy;' + new Date().getFullYear() + ' ' + name;
}

function codeblock(options) {
  let htmlPreStart = '<pre class="codeblock">';
  let htmlPreContent = tokens(options.fn(this));
  let htmlPreEnd = '</pre>';
  return htmlPreStart + htmlPreContent + htmlPreEnd;
}

function tokens(string) {
  let keywords = 'var let function return if else while for break continue throw catch';

  keywords = keywords.replace(/\s+/, '|');

  let rules = [
    {pattern: new RegExp(keywords, 'y'), className: 'keyword'},
    {pattern: /[a-zA-Z$](\w*|$)/y, className: 'identifier'},
    {pattern: /"([^\\"]|\\.)*"/y, className: 'string'},
    {pattern: /'([^\\']|\\.)*'/y, className: 'string'},
    {pattern: /\/([^\\\/]|\\.)*\/[a-z]*/y, className: 'regex'},
    {pattern: /-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?/y, className: 'number'},
    {pattern: /\s+/y, className: 'whitespace'},
    {pattern: /\/\/.*/y, className: 'comment'},
    {pattern: /\/\*([^\/]|\/(?!\*))*\*\//y, className: 'comment'},
    {pattern: /&&|\|\||<<|>>|[+\-*\/=&|!<>]=?/y, className: 'operator'},
    {pattern: /./y, className: 'delimiter'}
  ];

  let result = '';
  let i = 0;
  while (i < string.length) {
    for (let rule of rules) {
      rule.pattern.lastIndex = i;
      let m = string.match(rule.pattern);
      if (m) {
        // console.log(`${' '.repeat(10 - rule.className.length)}${rule.className}[${m[0].replace(/\n/g, '\\n')}]`);
        i = rule.pattern.lastIndex;
        result += '<span class="' + rule.className + '">' + m[0].replace(/\n/g, '\n') + '</span>';
        break;
      }
    }
  }
  return result;
}

module.exports = {
  codeblock,
  copyright
};

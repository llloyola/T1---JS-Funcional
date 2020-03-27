let exampleMD = `
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

`

// Patrones regex
const wholeLinePattern = /^(.*\| .+$)/gm;
const beginningPattern = /^\n\s?(.*\|.*)$/gm;
const endingPattern = /\|?(.+\|[^\|\n]+)+\|?\n\s/g;

const dashesPattern = /^[\s-:]*\|[\s-:\|]*\n/gm;

const firstTrPattern = /(?<!<\/tr>\n)<tr>.+/g;
const lastTrPattern = /^(<tr>.+<\/tr>)(?=\n(?!<tr>))/gm;

const replaceMiddleLine = md => md.replace(wholeLinePattern, '');
const replaceBeginningLine = md => md.replace(beginningPattern, '');
const replaceEndingLine = md => md.replace(endingPattern, '');

const prettifyHeader = type => header => `<${type}>\n`.concat(header.trim()
    .trim('|')
    .split('|')
    .filter(element => element)
    .map(element => `<tr>${element.trim()}</tr>`)
    .join('\n'), `\n</${type}>`);

const replaceLine = pattern => newLine => line => line.replace(pattern, newLine);

const prettifyLine = pattern => fn => md => md.replace(pattern, x => fn(x));

const dashesDeleter = x => '';

exampleMD = prettifyLine(beginningPattern)(prettifyHeader('th'))(exampleMD);
console.log(exampleMD);
exampleMD = prettifyLine(dashesPattern)(dashesDeleter)(exampleMD);
console.log(exampleMD);
exampleMD = prettifyLine(wholeLinePattern)(prettifyHeader('td'))(exampleMD);
console.log(exampleMD);
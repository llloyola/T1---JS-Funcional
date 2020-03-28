import {pipe} from "./pipeline.mjs";


let md = `
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
const beginningPattern = /^(?<=\n\s)(.*\|.*)$/gm;

const dashesPattern = /^[\s-:]*\|[\s-:\|]*\n/gm;

const firstTrPattern = /(?=\n<tr>\n<th>)/gm;
const lastTrPattern = /(?<=<\/tr>)(?!\n<tr>)/g;

const prettifyHeader = type => header => `<tr>\n`.concat(header.trim()
    .trim('|')
    .split('|')
    .filter(element => element)
    .map(element => `<${type}>${element.trim()}</${type}>`)
    .join('\n'), `\n</tr>`);

const prettifyLine = pattern => fn => md => md.replace(pattern, x => fn(x));

const dashesDeleter = x => '';
const addTableTag = x => `\n<table>${x}`;
const addClosingTableTag = x => `${x}\n</table>`;


export const tableMDtoHTML = pipe([
    prettifyLine(beginningPattern)(prettifyHeader('th')),
    prettifyLine(dashesPattern)(dashesDeleter),
    prettifyLine(wholeLinePattern)(prettifyHeader('td')),
    prettifyLine(firstTrPattern)(addTableTag),
    prettifyLine(lastTrPattern)(addClosingTableTag),
    prettifyLine(/<table>/gm)(x => '<table style="border: 1px solid black;font-family: arial, sans-serif;border-collapse: collapse;width: 100%;">'),
    prettifyLine(/<th>/gm)(x => '<th style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'),
    prettifyLine(/<td>/gm)(x => '<td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'),
    prettifyLine(/<tr>/gm)(x => '<tr style="background-color: #dddddd">'),
]);

//console.log(tableMDtoHTML(md));

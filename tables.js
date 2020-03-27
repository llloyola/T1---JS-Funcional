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

const dashesPattern = /^[\s-:]*\|[\s-:\|]*\n/gm;

const firstThPattern = /(?=\n<th>\n<tr>)/gm;
const lastTdPattern = /(?<=<\/td>)(?!\n<td>)/g;

const prettifyHeader = type => header => `<${type}>\n`.concat(header.trim()
    .trim('|')
    .split('|')
    .filter(element => element)
    .map(element => `<tr>${element.trim()}</tr>`)
    .join('\n'), `\n</${type}>`);

const prettifyLine = pattern => fn => md => md.replace(pattern, x => fn(x));

const dashesDeleter = x => '';
const addTableTag = x => `\n<table>${x}`;
const addClosingTableTag = x => `${x}\n</table>`;

const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data);
}

const pipelineResult = pipe([
    prettifyLine(beginningPattern)(prettifyHeader('th')),
    prettifyLine(dashesPattern)(dashesDeleter),
    prettifyLine(wholeLinePattern)(prettifyHeader('td')),
    prettifyLine(firstThPattern)(addTableTag),
    prettifyLine(lastTdPattern)(addClosingTableTag),
])(exampleMD);

console.log(pipelineResult);
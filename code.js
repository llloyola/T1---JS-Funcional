exampleMD = `
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
 
\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`var foo = 0;\`
`

const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data);
}

const pipelineCode = pipe([
    md => md.replace(/`{3}.+\n([^`]+)`{3}/gm, '<code style=display:block;white-space:pre-wrap>\n$1</code>'),
    md => md.replace(/`([^\n`]+)`/g, '<code>$1</code>'),
]);

console.log(pipelineCode(exampleMD));
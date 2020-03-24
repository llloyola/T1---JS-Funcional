const exampleMD = `
Luis Loyola:
 * Listas
 * Code and Syntax Highlightning (sin colores)
 * Tablas
 
Julian Lires:
 * Emphasis
 * Links
 * Blockquotes
 
Juan Lopez:
 * Headers
 * Imágenes
 * Horizontal Rules

`

const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data);
}

const pipelineUL = pipe([
    md => md.replace(/^(.*\n)\s*\*(.+)\n[^\*]*/gm, '$1<ul>\n *$2\n '),
    md => md.replace(/^\s*(\*.+)\n\s*\n/gm, ' $1\n</ul>\n\n'),
    md => md.replace(/^\s\*(.+)/gm, '<li>$1</li>'),
]);

console.log(pipelineUL(exampleMD));
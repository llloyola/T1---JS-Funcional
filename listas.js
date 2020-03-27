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
    md => md.replace(/(?<=\n|\n\s)\*([^\*\n]+)$/gm, '<li>$1</li>'),
    md => md.replace(/(?<!<\/li>\n)\s(<li>)/gm, '<ul>\n $1'),
    md => md.replace(/(<\/li>)(?!\n\s<li>)/gm, '$1\n</ul>'),
]);

//console.log(pipelineUL(exampleMD));

module.exports = pipelineUL;
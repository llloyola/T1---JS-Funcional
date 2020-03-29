import {pipe} from "./pipeline.mjs";


const md = `
Luis Loyola:
 1. Listas
 2. Code and Syntax Highlightning (sin colores)
 3. Tablas

Julian Lires:
 * Emphasis
 * Links
 * Blockquotes

Juan Lopez:
 * Headers
 * Imágenes
 * Horizontal Rules

`

export const listMDtoHTML = pipe([
    md => md.replace(/(?<=\n|\n\s)\*([^\*\n]+)$/gm, '<li>$1</li>'),
    md => md.replace(/(?<!<\/li>\n)\s(<li>)/gm, '<ul>\n $1'),
    md => md.replace(/(<\/li>)(?!\n\s<li>)/gm, '$1\n</ul>'),
    md => md.replace(/(?<=\n|\n\s)(\d\.[^\d\.\n]+)$/gm, '<li>$1</li>'),
    md => md.replace(/(?<!<\/li>\n|<ul>\n)\s(<li>)/gm, '<ol>\n $1'),
    md => md.replace(/(<\/li>)(?!\n\s<li>|\n<\/ul>)/gm, '$1\n</ol>'),
]);

console.log(listMDtoHTML(md));

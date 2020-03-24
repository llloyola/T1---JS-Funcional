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

detectList = md => {
    let newMd = md.replace(/^(.*\n)\s*\*(.+)\n[^\*]*/gm, '$1<ul>\n *$2\n ');
    newMd = newMd.replace(/^\s*(\*.+)\n\s*\n/gm, ' $1\n</ul>\n\n');
    newMd = newMd.replace(/^\s\*(.+)/gm, '<li>* $1</li>')
    return newMd;
}

console.log(detectList(exampleMD));
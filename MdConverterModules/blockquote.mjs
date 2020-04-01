const md = "> een quite for your pleasure just one question, is it multiline? Yes it sure is sir";

export const blockquoteMDtoHTML = text => text.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');

export const blockquoteMDtoTXT = text => text.replace(/^\>(.+)/gm, '$1');

//console.log(blockquoteMDtoHTML(md))

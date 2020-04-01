import {pipe} from "./pipeline.mjs";


const md = `
*italic* or _italic_
**bold**
**_bold and italic_** or __bold and italic too__
~~striked through~~
`;

const compose = (a,b,c) => (x) => c(b(a(x)));

const boldMDtoHTML = text => text.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
const italicMDtoHTML = text => text.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
const striketroughMDtoHTML = text => text.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');


export const emphasisMDtoHTML = compose(boldMDtoHTML, italicMDtoHTML, striketroughMDtoHTML);


const boldMDtoTXT = text => text.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '$1');
const italicMDtoTXT = text => text.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '$1');
const striketroughMDtoTXT = text => text.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '$1');


export const emphasisMDtoTXT = compose(boldMDtoTXT, italicMDtoTXT, striketroughMDtoTXT);


//console.log(emphasisMDtoHTML(md))

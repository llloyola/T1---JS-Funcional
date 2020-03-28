//import {pipe} from "./pipeline.mjs";

const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}


const md = "> een quite for your pleasure just one question, is it multiline? Yes it sure is sir";

export const blockquoteMDtoHTML = pipe ([
    text => text.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>'),
]);

//console.log(blockquoteMDtoHTML(md))

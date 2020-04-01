import {pipe} from "./pipeline.mjs";


const md = `This is a link -> [link](https://google.com?q=multiline%20text "Google homepage") `;

export const linkMDtoHTML = url => url.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');

export const linkMDtoTXT = url => url.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '$1');

//console.log(linkMDtoHTML(md))

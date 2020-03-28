import {pipe} from "./pipeline.mjs";


const md = `This is a link -> [link](https://google.com?q=multiline%20text "Google homepage") `;

export const linkMDtoHTML = pipe ([
    url => url.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>'),
]);

//console.log(linkMDtoHTML(md))

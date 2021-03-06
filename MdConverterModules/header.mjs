import {pipe} from "./pipeline.mjs";

export const hdMDtoHTML = pipe([
    text => text.replace(/\#{6}(.+)/g, '<h6>$1</h6>'),
    text => text.replace(/\#{5}(.+)/g, '<h5>$1</h5>'),
    text => text.replace(/\#{4}(.+)/g, '<h4>$1</h4>'),
    text => text.replace(/\#{3}(.+)/g, '<h3>$1</h3>'),
    text => text.replace(/\#{2}(.+)/g, '<h2>$1</h2>'),
    text => text.replace(/\#{1}(.+)/g, '<h1>$1</h1>'),
    text => text.replace(/^(.+)\n\={2,}/gm, '<h1>$1</h1>'),
    text => text.replace(/^(.+)\n\-{2,}/gm, '<h2>$1</h2>'),

]);

export const hdMDtoTXT = pipe([
    text => text.replace(/\#{6} (.+)/g, '$1'),
    text => text.replace(/\#{5} (.+)/g, '$1'),
    text => text.replace(/\#{4} (.+)/g, '$1'),
    text => text.replace(/\#{3} (.+)/g, '$1'),
    text => text.replace(/\#{2} (.+)/g, '$1\n'),
    text => text.replace(/\#{1} (.+)/g, '$1\n\n'),
    text => text.replace(/^(.+)\n\={2,}/gm, '$1\n\n'),
    text => text.replace(/^(.+)\n\-{2,}/gm, '$1\n'),
])

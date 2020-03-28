import {pipe} from "./pipeline.mjs";
import {emphasisMDtoHTML} from "./emphasis.mjs";
import {blockquoteMDtoHTML} from "./blockquote.mjs";
import {imgMDtoHTML} from "./images_html.mjs";
import {linkMDtoHTML} from "./link.mjs";
//import {listMDtoHTML} from "./listas.mjs";
//import {tableMDtoHTML} from "./tables.mjs";

export const MDtoHTML = pipe([
    text => emphasisMDtoHTML(text),
    text => imgMDtoHTML(text),
    text => linkMDtoHTML(text),
    text => blockquoteMDtoHTML(text),
]);

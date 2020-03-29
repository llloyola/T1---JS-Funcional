import {pipe} from "./pipeline.mjs";
import {emphasisMDtoHTML} from "./emphasis.mjs";
import {blockquoteMDtoHTML} from "./blockquote.mjs";
import {imgMDtoHTML} from "./images_html.mjs";
import {linkMDtoHTML} from "./link.mjs";
import {listMDtoHTML} from "./listas.mjs";
import {tableMDtoHTML} from "./tables.mjs";
import { hrMDtoHTML } from "./horizontal_rules.mjs";
import {hdMDtoHTML} from "./header.mjs";
import { cdMDtoHTML } from "./code.mjs";

export const MDtoHTML = pipe([
    text => tableMDtoHTML(text),
    text => hdMDtoHTML(text),
    text => hrMDtoHTML(text),
    text => listMDtoHTML(text),
    text => cdMDtoHTML(text),
    text => emphasisMDtoHTML(text),
    text => imgMDtoHTML(text),
    text => linkMDtoHTML(text),
    text => blockquoteMDtoHTML(text),
  
    
]);

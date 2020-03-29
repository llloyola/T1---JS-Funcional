import {pipe} from "./pipeline.mjs";
import {emphasisMDtoHTML, emphasisMDtoTXT} from "./emphasis.mjs";
import {blockquoteMDtoHTML, blockquoteMDtoTXT} from "./blockquote.mjs";
import {imgMDtoHTML, imgMDtoTXT} from "./images_html.mjs";
import {linkMDtoHTML, linkMDtoTXT} from "./link.mjs";
import {listMDtoHTML} from "./listas.mjs";
import {tableMDtoHTML} from "./tables.mjs";
import {hrMDtoHTML} from "./horizontal_rules.mjs";
import {hdMDtoHTML, hdMDtoTXT} from "./header.mjs";
import {cdMDtoHTML, cdMDtoTXT} from "./code.mjs";


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

export const MDtoTXT = pipe([
    text => hdMDtoTXT(text),
    text => cdMDtoTXT(text),
    text => emphasisMDtoTXT(text),
    text => imgMDtoTXT(text),
    text => linkMDtoTXT(text),
    text => blockquoteMDtoTXT(text),


]);

export const generateFile = (text, name, extension) => {
  let f = new Blob([text], {type:"text/plain;charset=utf-8"});
  saveAs(f, name + extension);
}

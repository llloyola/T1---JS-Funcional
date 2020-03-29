import {pipe} from "./pipeline.mjs";

export const cdMDtoHTML = pipe([
    md => md.replace(/`{3}.*\n([^`]+)`{3}/gm, '<br /><code style=display:block;white-space:pre-wrap>\n$1</code><br />'),
    md => md.replace(/`([^\n`]+)`/g, '<br /><code>$1</code><br />'),
]);

export const cdMDtoTXT = md => md.replace(/^`{3}/g, '');

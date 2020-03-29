import {pipe} from "./pipeline.mjs";

export const cdMDtoHTML = pipe([
    md => md.replace(/`{3}.*\n([^`]+)`{3}/gm, '<code style=display:block;white-space:pre-wrap>\n$1</code>'),
    md => md.replace(/`([^\n`]+)`/g, '<code>$1</code>'),
]);

export const cdMDtoTXT = md => md.replace(/^`{3}/g, '');

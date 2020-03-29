import {pipe} from "./pipeline.mjs";

export const hrMDtoHTML = pipe([
    text => text.replace(/\*{3}/g, '<hr />'),
    text => text.replace(/\-{2}.+/g, '<hr />'),
    text => text.replace(/\_{3}/g, '<hr />'),
]);
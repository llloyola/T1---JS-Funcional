import {pipe} from "./pipeline.mjs";


const md = "![Placehold.it 200x200 image](https://mardecode.herokuapp.com/2017/02/12/introduccion-a-la-programacion-Funcional/encabezado.png)";

export const imgMDtoHTML = pipe ([
    url => url.replace(/\![\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<img src="$2" alt="$1" />'),
]);

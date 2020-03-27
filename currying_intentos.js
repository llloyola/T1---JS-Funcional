const example = `
# Este es un ejemplo
## Primera parte
En esta sección veremos como funciona ala, ala, bla ..., ala, ala,
bla ..., ala, ala, bla ..., ala, ala, bla ..., ala, ala, bla ..., ala, ala, bla ...,
ala, ala, bla ..., ala, ala, bla ..., ala, ala, bla ...
Las posibles consecuencias de ello son
1. Primera
2. Segunda
3. Tercera
En cambio no es necesario considerar cosas como
* algo
* algo mas
* etcetera
## Segunda parte
Ahora otra sección para mostrar como mostrar código
def say_goodnight(name)
result = "Good night, #{name}"
return result
end
#puts say_goodnight "Jaime"
class BookInStock
def initialize(isbn, price)
@isbn = isbn
@price = Float(price)
end
end 
Insertar una línea es muy fácil
***
`

const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}

const pipelineHR = pipe([
    text => text.replace(/\*{2}.+/g, '<hr />'),
    text => text.replace(/\-{2}.+/g, '<hr />'),
    text => text.replace(/\_{2}.+/g, '<hr />'),
]);

const pipelineImg = pipe ([
    url => url.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />'),
]);


const pipelineHD = pipe([
    text => text.replace(/\#{6}(.+)/g, '<h6>$1</h6>'),
    text => text.replace(/\#{5}(.+)/g, '<h5>$1</h5>'),
    text => text.replace(/\#{4}(.+)/g, '<h4>$1</h4>'),
    text => text.replace(/\#{3}(.+)/g, '<h3>$1</h3>'),
    text => text.replace(/\#{2}(.+)/g, '<h2>$1</h2>'),
    text => text.replace(/\#{1}(.+)/g, '<h1>$1</h1>'),
]);

// no funciona
const converterr = (fn, fn_2, fn_3, md) => {
    return (md) => {
        return (fn_3) => {
            return (fn_2) => {
                return fn(fn_2(fn_3(md)));
            }
        }
    }
}

const converter = a => b => c => d => a(b(c(d)));
// Combinators funciona
console.log(converter(pipelineHR)(pipelineHD)(pipelineImg)(example));
// curry ES6 funciona

const c1 = converter(pipelineHR);
const c2 = c1(pipelineHD);
const c3 = c2(pipelineImg);
const text = c3(example);
console.log(text);


//no funciona
const curryconverter = md =>{
    return (fn3) => {
        return (fn2) => {
            return (fn1) => {
                console.log(fn3(fn2(fn1(md))));
            }
        }
    } 
}
// no funciona
function applyConverter(a,b,c,d) {
    return console.log(d(c(b(a))));
}

var Header = (a,b) => b(a);
var Horizontal = (a,b) => b(a);
var Images = (a,b) => b(a);

applyConverter(Header, Horizontal, Images, example);
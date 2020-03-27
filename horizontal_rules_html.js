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
const mdHR = `
***
---
-----
_____
`

const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}


const pipelineHR = pipe([
    text => text.replace(/\*{3}/g, '<hr />'),
    text => text.replace(/\-{2}.+/g, '<hr />'),
    text => text.replace(/\_{2}.+/g, '<hr />'),
]);

//console.log(pipelineHR(mdHR))
//console.log(pipelineHR(example))

module.exports = pipelineHR;
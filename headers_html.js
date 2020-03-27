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

const md = `
# H1
## H2
### H3
#### H4
##### H5
###### H6
`


const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}


const pipelineHD = pipe([
    text => text.replace(/\#{6}(.+)/g, '<h6>$1</h6>'),
    text => text.replace(/\#{5}(.+)/g, '<h5>$1</h5>'),
    text => text.replace(/\#{4}(.+)/g, '<h4>$1</h4>'),
    text => text.replace(/\#{3}(.+)/g, '<h3>$1</h3>'),
    text => text.replace(/\#{2}(.+)/g, '<h2>$1</h2>'),
    text => text.replace(/\#{1}(.+)/g, '<h1>$1</h1>'),
]);


console.log(pipelineHD(md))
console.log(pipelineHD(example))

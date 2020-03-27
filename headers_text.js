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
    text => text.replace(/#/g, ''),
])

console.log(pipelineHD(md));
console.log(pipelineHD(example));

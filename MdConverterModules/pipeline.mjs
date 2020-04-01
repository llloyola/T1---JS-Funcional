export const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}

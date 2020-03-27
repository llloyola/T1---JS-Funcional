const md = `
*italic* or _italic_
**bold**
**_bold and italic_** or __bold and italic too__
~~striked through~~
`


const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}


const pipelineEmphasis = pipe([
    // bold
    text => text.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>'),
    // italics
    text => text.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>'),
    // striketrough
    text => text.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>')
]);


//console.log(pipelineEmphasis(md))

module.exports = pipelineEmphasis;

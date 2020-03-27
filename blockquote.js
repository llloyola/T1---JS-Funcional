const md = "> een quite for your pleasure just one question, is it multiline? Yes it sure is sir"


const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}

const pipelineBlockQuote = pipe ([
    text => text.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>'),
]);

//console.log(pipelineBlockQuote(md))

module.exports = pipelineBlockQuote;

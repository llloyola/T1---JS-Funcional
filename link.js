const md = "This is a link -> [link](https://google.com?q=multiline%20text "Google homepage") "


const pipe = functions => data => {
    return functions.reduce((value, func) => func(value), data)
}

const pipelineLink = pipe ([
    url => url.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>'),
]);

//console.log(pipelineLink(md))

module.exports = pipelineLink;

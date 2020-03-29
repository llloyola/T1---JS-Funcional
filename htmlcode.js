import {MDtoHTML, generateHTMLFile} from "./MDtoHTML/mdtohtml.mjs"


$(document).ready(function() {

  let normal_text = null;
  let html_text = null;

  $("#inputFile").change(() => {
    const file = $("#inputFile")[0].files[0];

    let reader = new FileReader();
    reader.onload = function(){
          let text = reader.result;
          html_text = MDtoHTML(text);
          $("#html-text").append(html_text);
          text = text.replace(/\n/g, "<br />");
          $("#markdown-text").append(text);
          //var node = document.getElementById('output');
          //node.innerText = text;
        };
    reader.readAsText(file);

  });


  $("#download-html").click(() => {
    generateHTMLFile(html_text, $("#inputFile")[0].files[0].name.slice(0, -3));
  });

});

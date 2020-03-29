import {MDtoHTML, MDtoTXT, generateFile} from "./MDtoHTML/mdtohtml.mjs"


$(document).ready(function() {

  let normal_text = null;
  let html_text = null;

  $("#inputFile").change(() => {
    const file = $("#inputFile")[0].files[0];

    let reader = new FileReader();
    reader.onload = function(){
          let text = reader.result;
          html_text = MDtoHTML(text);
          normal_text = MDtoTXT(text);
          $("#html-text").append(html_text);
          $("#txt-text").append(normal_text);
          text = text.replace(/\n/g, "<br />");
          $("#markdown-text").append(text);
          //var node = document.getElementById('output');
          //node.innerText = text;
        };
    reader.readAsText(file);

  });


  $("#download-html").click(() => {
    generateFile(html_text, $("#inputFile")[0].files[0].name.slice(0, -3), ".html");
  });
  $("#download-txt").click(() => {
    generateFile(normal_text, $("#inputFile")[0].files[0].name.slice(0, -3), ".txt");
  });

});

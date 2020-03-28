import {MDtoHTML} from "./MDtoHTML/mdtohtml.mjs"

$(document).ready(function() {

  $("#inputFile").change(() => {
    const file = $("#inputFile")[0].files[0];

    let reader = new FileReader();
    reader.onload = function(){
          let text = reader.result;
          text = text.replace(/\n/g, "<br />");
          $("#markdown-text").append(text);
          $("#html-text").append(MDtoHTML(text));
          //var node = document.getElementById('output');
          //node.innerText = text;
        };
    reader.readAsText(file);

  });

});
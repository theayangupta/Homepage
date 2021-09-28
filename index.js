var count = 0;
var find = document.getElementById('cnt');

function colorChange() {
    if(count < 0)
    {
        find.style.color = "#FF0000"; 
    }
    
    if(count == 0)
    {
        find.style.color = "#000000"; 
    }

    if(count > 0)
    {
        find.style.color = "#008000";
    }
}

document.getElementById('dec').onclick = function() {
    count--;
    find.innerHTML = count;

    colorChange();
}

document.getElementById('reset').onclick = function() {
    count = 0;
    find.innerHTML = count;

    colorChange();
}

document.getElementById('inc').onclick = function() {
    count++;
    find.innerHTML = count;

    colorChange();
}

var text, parser, xmlDoc;

text = "<copyright>" +
"<Name>Ayan Gupta</Name>" +
"<GitHub>github.com/theayangupta</GitHub>" +
"<br>" +
"</copyright>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("copyright-details").innerHTML =
xmlDoc.getElementsByTagName("Name")[0].childNodes[0].nodeValue + "<br>" + xmlDoc.getElementsByTagName("GitHub")[0].childNodes[0].nodeValue;

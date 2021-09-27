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




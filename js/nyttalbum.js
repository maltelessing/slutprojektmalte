var elem1 = document.getElementById("myContainer");
elem1.addEventListener("mouseover", function() {
    myMove(1);
});

var elem2 = document.getElementById("myContainer2");
elem2.addEventListener("mouseover", function() {
    myMove(2);
});

function myMove(containerNum) {
    var elem, pos;
    if (containerNum === 1) {
        elem = document.getElementById("myAnimation");
        pos = 0;
    } else if (containerNum === 2) {
        elem = document.getElementById("myAnimation2");
        pos = 400;
    } else {
        return;
    }

    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 70) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
    }
}

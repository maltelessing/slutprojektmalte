var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top ='300px';
      
     
 
    }
  }
}


var id = null;
function myMove2() {
  var elem = document.getElementById("myAnimation2");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top ='-500px';
      
     
 
    }
  }
} 


var id = null;
function nerMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top ='400px';
      
     
 
    }
  }
}


var id = null;
function nerMove2() {
  var elem = document.getElementById("myAnimation2");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top ='-400px';
      
     
 
    }
  }
} 
/* var animation1 = document.getElementById("myAnimation");
var container1 = document.getElementById("myContainer");
var animation2 = document.getElementById("myAnimation2");
var container2 = document.getElementById("myContainer2");

var height = 70; // Antal pixlar att röra animationen uppåt

function moveAnimation1() {
  animation1.style.top = "-" + height + "px";
}

function resetAnimation1() {
  animation1.style.top = "0px";
}

function moveAnimation2() {
  animation2.style.top = "-" + height + "px";
}

function resetAnimation2() {
  animation2.style.top = "0px";
}

container1.addEventListener("mouseover", moveAnimation1);
container1.addEventListener("mouseout", resetAnimation1);

container2.addEventListener("mouseover", moveAnimation2);
container2.addEventListener("mouseout", resetAnimation2);
*/

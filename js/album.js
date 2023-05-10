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

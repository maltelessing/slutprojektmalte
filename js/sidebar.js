function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  window.addEventListener('scroll', showRutorna);

  function showRutorna() {
    var rutorna = document.querySelectorAll('.rutorna > div');
  
    for (var i = 0; i < rutorna.length; i++) {
      var ruta = rutorna[i];
      var rutaTop = ruta.getBoundingClientRect().top;
  
      if (rutaTop < window.innerHeight) {
        ruta.classList.add('show');
      } else {
        ruta.classList.remove('show');
      }
    }
  }
/* Menyn-så den håller sig uppe hela tiden */
window.addEventListener('scroll', function() {
  var menuText = document.querySelector('.menu-text');
  var distanceFromTop = menuText.getBoundingClientRect().top;
  var threshold = 100; /* Justera tröskelvärdet efter behov */
  var menuOverlay = document.querySelector('.menu-overlay');

  if (distanceFromTop <= threshold) {
    menuText.classList.add('fixed');
    menuOverlay.classList.add('fixed-overlay');
  } else {
    menuText.classList.remove('fixed');
    menuOverlay.classList.remove('fixed-overlay');
  }
});


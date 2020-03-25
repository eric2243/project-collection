imgobj = document.getElementById("img");
var s = 0;
var sobj = " ";
imgobj.onmouseenter = function() {
      clearInterval(sobj);
      sobj = setInterval(function() {
        v = 20;
      	s+= v;
      	imgobj.style.transform = "rotate(" + s + "deg)";
      },50)
  }

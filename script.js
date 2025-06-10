//For toggle text
var cllps = document.getElementsByClassName("collapsible");
var x;
for (x = 0; x < cllps.length; x++) {
  cllps[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/* */

//For scroll back to top
let mybtn = document.getElementById("my_btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
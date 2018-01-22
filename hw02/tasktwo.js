
(function() {
  "use strict";
 
  function init() {
    document.getElementById("buttonOne").addEventListener("click", buttonOneClick);
    document.getElementById("buttonTwo").addEventListener("click", buttonTwoClick);
    document.getElementById("buttonThree").addEventListener("click", buttonThreeClick);
  }

  function buttonOneClick() {
    var number = document.getElementById('number');
    alert(number.innerHTML);
  }

  function buttonTwoClick() {
    var number = document.getElementById('number');
    number.innerText = parseInt(number.innerHTML) + 1;
  }

  function buttonThreeClick() {
    var number = document.getElementById('number');
    var tag = document.createElement("p");
    var txt = document.createTextNode(number.innerHTML);
    tag.appendChild(txt);
    document.getElementById("bot").appendChild(tag);
  }
  window.addEventListener('load', init, false);  

  
})();



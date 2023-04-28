let
  inputs = document.querySelectorAll(".input"),
  val;
  
function check() {
  let 
  m = document.getElementById("m").value, //height
  n = document.getElementById("n").value, //width
  k = document.getElementById("k").value, //inputed pieces
  output = "Не можна";

  if ((k < m * n) & (m > 0 & n > 0 & k > 0)) {
    if ((k % m === 0) & (k >= m)) {
      let a = k;
      while(a >= m) {
        a -= m;
        if(a === 0) {
          output = "Можна";
          break;
        }
        else {
          output = "Не можна";
        }
      }
    }
    if ((k % n === 0) & (k >= n)) {
      let a = k;
      while(a >= n) {
        a -= n;
        if(a === 0) {
          output = "Можна";
          break;
        }
        else {
          output = "Не можна";
        }
      }
    }
   }
   else {
    alert("Введіть вірні значення!");
   }

  document.getElementById("y").innerHTML = output
}

inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        val = e.target.value.replace(/[^0-9]/g, '');
        input.value = val;
    });
});
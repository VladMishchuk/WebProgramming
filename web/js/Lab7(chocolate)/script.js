let
  inputs = document.querySelectorAll(".input"),
  val;
    
function check() {
  let 
    height = document.getElementById("m").value,
    width = document.getElementById("n").value,
    pieces = document.getElementById("k").value,
    chocolate = width * height,
    output;
  if (height % pieces === 0 | width  % pieces === 0) {
    while(chocolate > 0) {
      height -= pieces
    }
  }
  console.log(height)
  console.log(5 % 1)
  /*output =  
    height === '' | 
    height === '0' | 
    width  === '' |
    pieces === ''
      ? alert("Введіть усі дані")
      : height % pieces === 0 |
        width  % pieces === 0
          ? "можна"
          : "не можна"
  */
  document.getElementById("y").innerHTML = output
}

inputs.forEach(input => {
    input.addEventListener("input", e => {
        val = input.value.replace(/[^0-9]/g, '');
        input.value = val;
    });
});
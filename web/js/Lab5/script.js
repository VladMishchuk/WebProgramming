function equation(){
  let a = parseInt(document.getElementById("a").value),
      b = parseInt(document.getElementById("b").value),
      y = document.getElementById("y").innerHTML;

  if (document.getElementById("a").value === "" |
      document.getElementById("b").value ===  "") 
  {
    document.getElementById("y").innerHTML = "Введіть обидва числа"
  }
  else
  {
    let numbers = [];
    if (a < b) {
      console.log("a < b");
      for (let i = a; i < b; i++) {
        numbers.push(i);
      }
      numbers.push(b);
      
    document.getElementById("y").innerHTML = "[" + numbers + "]";
    }
    else if (a > b) {
      console.log("a > b");
      for (let i = b; i < a; i++) {
        numbers.push(i);
      }
      numbers.push(a);
      
    document.getElementById("y").innerHTML = "[" + numbers + "]";
    }
    else {
      console.log("a === b");
      document.getElementById("y").innerHTML = "[" + a + "]";
    }
    console.log(numbers);
  }
}

let 
    inputs = document.querySelectorAll(".input"),
    value;

inputs.forEach(input => {
  input.addEventListener("input", e => {
      value = input.value.replace(/[^0-9, -]/g, '');
      input.value = value;
  });
});
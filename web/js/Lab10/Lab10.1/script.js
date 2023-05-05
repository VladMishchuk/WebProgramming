function button1() {
  let button = document.getElementById("button");
  let ta = document.getElementById("textarea");

  button.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      ta.value = "ЛКМ";
    } else if (event.button === 2) {
      ta.value = "ПКМ";
    }
  });
}

function button2() {
  let button = document.getElementById("rbutton");

  button.addEventListener("mousedown", (event) => {
    if (event.altKey && event.ctrlKey && event.shiftKey && event.button === 0) {
      alert("Ви зробили вірно!");
    }
  });
}
button1();
button2();

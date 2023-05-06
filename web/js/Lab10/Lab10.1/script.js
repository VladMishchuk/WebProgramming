const textarea = document.getElementById("textarea"),
  mouseBtn = document.getElementById("mouse-btn"),
  combinationBtn = document.getElementById("combination-btn");

function mouseClick() {
  mouseBtn.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      textarea.value = "ЛКМ";
    } else if (event.button === 2) {
      textarea.value = "ПКМ";
    }
  });
}

function combinationClick() {
  combinationBtn.addEventListener("mousedown", (event) => {
    if (event.altKey && event.ctrlKey && event.shiftKey && event.button === 0) {
      alert("Ви зробили вірно!");
    }
  });
}
mouseClick();
combinationClick();

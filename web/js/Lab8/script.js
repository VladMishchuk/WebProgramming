const body = document.body,
  main = document.body.firstElementChild,
  h1 = document.body.firstElementChild.firstElementChild,
  firstParagraph =
    document.body.firstElementChild.children[2].firstElementChild.children[0],
  thirdParagraph =
    document.body.firstElementChild.children[2].firstElementChild.children[2],
  thirdPointInThirdList =
    document.body.firstElementChild.children[2].children[3].children[2],
  thirdCellInSecondRow =
    document.body.firstElementChild.children[3].rows[1].cells[2],
  fourthCellInThirdRow =
    document.body.firstElementChild.children[3].rows[2].cells[3],
  tbody = document.body.firstElementChild.children[3].firstElementChild,
  preLastRow = tbody.children[tbody.childElementCount - 1 - 1],
  button = document.body.firstElementChild.children[4],
  color = "hsl(195, 73%, 61%)";

button.addEventListener("click", () => {
  body.style.background = color;
  h1.style.background = color;
  firstParagraph.style.background = color;
  thirdParagraph.style.background = color;
  thirdPointInThirdList.style.background = color;
  thirdCellInSecondRow.style.background = color;
  preLastRow.style.background = color;

  h1.style.borderRadius = "10px";
  firstParagraph.style.borderRadius = "10px";
  thirdParagraph.style.borderRadius = "10px";
  thirdPointInThirdList.style.borderRadius = "10px";
  thirdCellInSecondRow.style.borderRadius = "10px";
  preLastRow.children[0].style.borderRadius = "10px 0 0 10px";
  preLastRow.children[preLastRow.childElementCount - 1].style.borderRadius =
    "0 10px 10px 0";

  alert(fourthCellInThirdRow.innerHTML);
});

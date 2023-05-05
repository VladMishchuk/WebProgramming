const ul = document.createElement("ul");
document.body.appendChild(ul);

function addList() {
  while (true) {
    let input = prompt("Введіть елемент списку:");
    if ((input === null) | (input === "")) {
      break;
    }

    let li = document.createElement("li");

    li.textContent = input;
    ul.append(li);
  }
}
addList();

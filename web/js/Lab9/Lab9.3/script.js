function listCreate() {
  list = document.createElement("ul");
  document.body.appendChild(list);

  while (true) {
    var itemText = prompt("Enter list item:");
    if (!itemText || itemText.trim() === "") {
      break;
    }
    var item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  }
}

window.onload = listCreate;

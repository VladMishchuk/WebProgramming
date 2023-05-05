function change() {
  let h2 = document.createElement("h2"),
    h1 = document.getElementsByTagName("h1")[0],
    p2 = document.createElement("p"),
    p1 = document.getElementsByTagName("p")[0],
    li2 = document.createElement("li"),
    li5 = document.createElement("li"),
    ol = document.getElementsByTagName("ol")[0];

  h2.textContent = "Заголовок першого рівня 2";
  p2.textContent = "Створений абзац";
  li2.textContent = "0";
  li5.textContent = "5";

  h1.insertAdjacentElement("afterend", h2);
  p1.insertAdjacentElement("afterend", p2);
  ol.prepend(li2);
  ol.append(li5);

  h1.classList.add("class");
  p1.classList.add("class");
}

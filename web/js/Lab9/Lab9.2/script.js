function change() {
  let h2 = document.createElement("h2");
  h2.textContent = "Header 2";

  let h1 = document.getElementsByTagName("h1")[0];
  h1.parentNode.insertBefore(h2, h1.nextSibling);

  let p2 = document.createElement("p");
  p2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo cumque eveniet itaque accusantium pariatur consectetur commodi excepturi rerum ab repellendus qui quod aspernatur ut quidem, nostrum natus perspiciatis dolorum?";

  let p1 = document.getElementsByTagName("p")[0];
  p1.parentNode.insertBefore(p2, p1.nextSibling);

  let li2 = document.createElement("li");
  li2.textContent = "Zero";

  let li1 = document.getElementsByTagName("li")[0];
  li1.parentNode.insertBefore(li2, li1);

  let li5 = document.createElement("li");
  li5.textContent = "Five";

  let ol = document.getElementsByTagName("ol")[0];
  ol.appendChild(li5);

  let customClass = document.querySelectorAll("#customClass");
  for (let el of customClass){
    el.classList.add("customClass");
  }
}

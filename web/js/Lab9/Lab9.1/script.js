function hcreate() {
  let h1 = document.createElement("h1");
  h1.textContent = "First header";

  let h2 = document.createElement("h2");
  h2.textContent = "Second header";

  let p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reiciendis vel itaque. Rerum deserunt voluptas dolore quia! Ipsam facilis, temporibus, quasi odio accusamus suscipit mollitia quod, reprehenderit id sunt minus!";

  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.body.appendChild(p);

  addStyles();
}

function addStyles() {
  let style = document.createElement("style");
  style.textContent =
    "body { color: #fffff8; background-color: #333742; } h1 { color: #f38136; } h2 { color: #f2e65f; } p { color: #12e8ac; }";
  document.head.appendChild(style);
}

window.onload = hcreate;

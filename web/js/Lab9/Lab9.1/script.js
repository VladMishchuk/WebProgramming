const h1 = document.createElement("h1"),
  h2 = document.createElement("h2"),
  p = document.createElement("p");

h1.innerText = "Заголовок першого рівня";
h2.innerText = "Заголовок другого рівня";
p.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam sit iure est vitae recusandae suscipit laboriosam nisi totam aut doloribus reiciendis nobis excepturi, exercitationem cupiditate minima modi laborum error adipisci!";

document.body.style.background =
  "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)";
document.body.style.fontFamily = "sans-serif";
h1.style.textAlign = "center";
h2.style.textAlign = "center";
p.style.textAlign = "center";

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(p);
var fp = document.getElementById("first");
fp.addEventListener("selectstart", (event) => {
  event.preventDefault();
});

var sp = document.getElementById("second");
sp.addEventListener("copy", (event) => {
  event.clipboardData.setData(
    "text/plain",
    "Copying data is not permitted on this website"
  );
  event.preventDefault();
});

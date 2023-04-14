button = document.getElementById("button");
button.addEventListener('click', () => {
  let name = document.getElementById("name").value,
      genders = document.querySelectorAll(".gender"),
      cities = document.querySelectorAll(".city"),
      languages = document.querySelectorAll(".lang"),
      message = "",
      genderChecked,
      citySelected,
      languagesIsChecked = 0;

  if (name !== ""){
    genders.forEach(gender => {
      if (gender.checked) {
           genderChecked = gender.value
      }
    })

    cities.forEach(city => {
      if (city.selected) {
          citySelected = city.value
      }
    })

    message =
      genderChecked === "male"
        ? "Шановний " + name + ", Ви вибрали місто " + citySelected
        : "Шановна "  + name + " ,Ви вибрали місто " + citySelected

    languages.forEach(lanuage => {
      lanuage.checked
        ? languagesIsChecked += 1
        : languagesIsChecked
    })

    message = 
      languagesIsChecked > 1
        ? message += " та мови програмування"
        : languagesIsChecked < 1
            ? message
            : message += " та мову програмування"
    
    languages.forEach(lanuage => {
      lanuage.checked
        ? message += " " + lanuage.value + ","
        : message
    })

    message =
      message[message.length - 1] === ","
        ? message = message.slice(0, -1) + "."
        : message += "."

    alert(message)
  }
});
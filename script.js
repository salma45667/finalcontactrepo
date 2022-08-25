function Darkmode() {
  let icon = document.getElementById("toggleDark");
  let body = document.body;
  icon.classList.toggle("bi-moon");
  if (icon.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundColor = "#dad7cd";
    document.getElementById("contactME").style.backgroundColor = "#588157";
    document.getElementById("contactME").style.borderTopColor = "#3a5a40";
    body.style.transition = "2s";
  } else {
    body.style.backgroundColor = "black";
    document.getElementById("contactME").style.backgroundColor = "#0F5132";
    document.getElementById("contactME").style.borderTopColor = "#066839";
    body.style.transition = "2s";
    document.getElementById("toggleDark").style.color = "#0F5132";
  }
}

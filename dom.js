let ul = document.getElementById("nombre")
let li = document.getElementById("modifier")
let current = li
currentnext = current.nextElementSibling
currentnext.style.backgroundColor = "red"
currentprevious = current.previousElementSibling
currentprevious.style.backgroundColor = "yellow"
alert(current.firstElementChild)
alert(current.lastElementChild)
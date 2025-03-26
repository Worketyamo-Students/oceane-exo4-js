let ul = document.getElementById("nombre")
let list = ul
let li = document.getElementById("modifier")
let current = li
currentnext = current.nextElementSibling
currentnext.style.backgroundColor = "red"
currentprevious = current.previousElementSibling
currentprevious.style.backgroundColor = "yellow"
console.log(list.firstElementChild.textContent)
console.log(list.lastElementChild.textContent)
current.addEventListener("click", (e) =>{
    console.log(e.target)
})
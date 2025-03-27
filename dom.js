

let ul = document.getElementById("nombre")
let div = document.querySelector("div")
let d = div
let items = ul.getElementsByTagName("li")
let li = document.getElementById("modifier")
console.log(items.re)
//3.1
let current = li
currentnext = current.nextElementSibling
currentnext.style.backgroundColor = "green"
currentprevious = current.previousElementSibling
currentprevious.style.backgroundColor = "yellow"
//3.2
console.log(ul.firstElementChild.textContent)
console.log(ul.lastElementChild.textContent)
// current.addEventListener("click", (e) =>{
//     console.log(e.target)
// })
//3.3
//3.5

let p = document.getElementById("paragraph")
let p_prime = p.cloneNode(true)
div.insertBefore(p_prime , p.nextSibling)
//3.$
let p_prime1 = p.cloneNode(true)
//exercice $
    


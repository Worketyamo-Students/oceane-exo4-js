//2
let body = document.querySelector("body")
for ( let i= 1 ; i<=10  ; i++){
    let p = document.createElement("p")
    p.textContent = "Paragraphe " + i
    console.log(p)
    body.appendChild(p)

}


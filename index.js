//1
let body = document.querySelector("body")
let liste = document.createElement("ul")
body.appendChild(liste)
for ( let i= 0 ; i<=3  ; i++){
    let l = document.createElement("li")
    l.textContent = "hello world" 
    l.className = "item-" +i
    liste.appendChild(l)

}
let t = "hello world"
let s = document.querySelector("li")
for ( let i= 0 ; i<=3  ; i++){
    let l = document.createElement("li")
    l.textContent = `${i}-hello world`
    l.className = "item-" +i
    liste.appendChild(l)

}

//2
for ( let i= 1 ; i<=10  ; i++){
    let p = document.createElement("p")
    p.textContent = "Paragraphe " + i
    console.log(p)
    body.appendChild(p)

}


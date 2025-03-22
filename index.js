//exercice 1
    let body = document.querySelector("body")
    let liste = document.createElement("ul")
    let liste1 = document.querySelectorAll("li")
    body.appendChild(liste)
    liste.style.display = "flex"
    liste.style.flexDirection = "column"
    liste.style.gap = "5"

    //1.1
    for (let i = 0;  i< liste1.length ; i++ ) {
        liste1[i].textContent = ` ${i}-hello world`, +i
    }
    
    //1.2
    for ( let i= 1 ; i<=10  ; i++){
        let p = document.createElement("p")
        p.textContent = "Paragraphe " + i
        console.log(p)
        body.appendChild(p)

    }
    // 1.3
    let table = document.getElementById("tableau")
    let cellule = document.getElementsByTagName("td")
    let couleur = [ "red", "green" , "yellow", "purple" , "pink"]
    for ( let i=0 ; i<cellule.length ; i++){
            cellule[i].style.backgroundColor = couleur[Math.floor(Math.random() *couleur.length)]
    
    }

    //1.$
    for ( let i= 0 ; i<=10  ; i++){
        let l = document.createElement("li")
        l.textContent = "hello world" 
        l.className = "item-" +i
        liste.appendChild(l)
        if(i%2 == 0){
            liste.removeChild(l)
        }
    }
    //1.5
    let tab = ["pomme", "banane","orange"]
    
    for ( let i=0 ; i<tab.length ; i++){
        let l = document.createElement("li")
        l.textContent = tab[i] 
        liste.appendChild(l)
        l.id = "item-" +i
        l.className = "item" +i

    }
//exercice 2
let division = document.querySelectorAll("div")
for (let i = 0;  i< division.length ; i++ ) {
    let p = document.createElement("p")
    p.textContent = "enfant ajoute"
    division[i].appendChild(p)
}



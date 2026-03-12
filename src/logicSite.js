function saluta(){
    alert("Sto creando un paragrafo!");
    let p = document.createElement("p");
    p.textContent = "Creato con JS!";
    document.body.appendChild(p);
}
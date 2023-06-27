
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");



abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");

})


let navlinks = document.querySelectorAll(".nav-link")

navlinks.forEach(navlink => {
    navlink.addEventListener("click",()=> {
        lista.classList.remove("visible");
    })
})

function enableDarkMode() {
    let body=document.body;
    body.classList.toggle("dark-mode");
}


    
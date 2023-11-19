/*main*/
const Inicioa = document.querySelector("#Inicioa");
const SobreNosotros = document.querySelector("#SobreNosotros");
const Aplicacion = document.querySelector("#Aplicacion");
const Precios = document.querySelector("#Precios");
const Contactanos = document.querySelector("#Contactanos");

/* Menu Inicio*/
Inicioa.addEventListener("click", (I) => {
    I.preventDefault();
    const sectionI = document.querySelector(".Inicioa");
    sectionI.scrollIntoView({behavior: "smooth"});
});

/* Menu SobreNosotros*/
SobreNosotros.addEventListener("click", (S) => {
    S.preventDefault();
    const sectionS = document.querySelector(".SobreNosotros");
    sectionS.scrollIntoView({behavior: "smooth"});
});

/* Menu Aplicacion*/
Aplicacion.addEventListener("click", (A) => {
    A.preventDefault();
    const sectionA = document.querySelector(".Aplicacion");
    sectionA.scrollIntoView({behavior: "smooth"});
})

/* Menu Precios*/
Precios.addEventListener("click", (P) => {
    P.preventDefault();
    const sectionP = document.querySelector(".Precios");
    sectionP.scrollIntoView({behavior: "smooth"});
})

/* Menu Contactanos*/
Contactanos.addEventListener("click", (C) => {
    C.preventDefault();
    const sectionC = document.querySelector(".contactenos");
    sectionC.scrollIntoView({behavior: "smooth"});
})

/*rudy */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});

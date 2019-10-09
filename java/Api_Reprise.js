ajaxGet("http://145.239.32.254:8081/Miyasaki/heros", (reponse)=> {
    var ListeHero = JSON.parse(reponse)
    ListeHero.forEach((hero) =>{
       creerElementHeroes(hero)
    })
});
function creerElementHeroes(hero) {
    var divHero = document.getElementById("Api")
    var nomHero = document.createElement("div")
    nomHero.textContent = hero.nom + ", du film numéro" + hero.film + ", " +hero.description + ", et as pour rôle : " + hero.role;
    divHero.appendChild(nomHero)
}
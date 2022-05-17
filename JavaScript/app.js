const nomeUtente = prompt("Qual è il tuo nome?")
const cognomeUtente = prompt("Qual è il tuo cognome?")
const coloreUtente = prompt("Qual è il tuo colore preferito?")

const formColor =document.getElementById("colorUtente");


formColor.innerHTML = 
` <span > ${nomeUtente} ${cognomeUtente} ${coloreUtente} 22</span> `

console.log(`${nomeUtente} ${cognomeUtente}`);
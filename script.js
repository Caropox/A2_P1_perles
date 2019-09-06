// console.log(document);
// console.log(window);

let perles = document.querySelectorAll('footer a');
// console.log(perles);

let h1 = document.querySelector('#pagetop h1');
console.log(h1);
h1.style.color = 'orange';
// h1.style.display 'none';

let h3 = document.querySelectorAll('article > h3')

for(let i = 0; i <h3.length; i++){
	h3[i].style.color = 'blue';
	console.log(h3[i]);
}

let button = document.querySelector('#plus > button');
console.log(button);
button.setAttribute('je-suis-attribut', 'cool');

button.classList.add('btn-dark');

button.addEventListener('click', chargerPlus);

function chargerPlus(){
	alert('Je chaaaaaarge !!!!');
}
/*
function pour charger plus d'élements;
*/
function chargerPlus(){
	let article = document.creatElement('article');
	let titreh3 = document.creatElement('titreh3');
	titreh3.innerText = 'Je suis un titre';
	let p = document.creatElement('p');
	p.innerText = 'Je suis un paragraphe';

	// Sélectionner l'ID "perles"
	let divPerles = document.getElementById('perles');

	// On ajoute les élements au DOM
	divPerles.appenchild(article);
	article.appenchild(titreh3);
	article.appenchild(p);
}

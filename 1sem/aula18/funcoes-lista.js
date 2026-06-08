// exercicio1

let lista = ['bob','vitor'];

function adicionarNoFinal(lista, elemento){
	let novaLista = [];

	for(let i = 0; i < lista.length; i++){
		novaLista[i] = lista[i]; 
	}

	novaLista[lista.length] = elemento;
	console.log(`Nova lista: ${novaLista}`)

	return novaLista;
}

adicionarNoFinal(lista,'jacob')

//exercicio2
function removerNoFinal(lista){
	let novaLista = [];

	for(let i = 0; i < lista.length - 1; i++){
		novaLista[i] = lista[i]; 
	}

	console.log(`Lista nova sem o ultimo elemento: ${novaLista}`)

	return novaLista;
}

//exercicio3
function removerDoInicio(lista){
	let novaLista = [];
	for(let i = 1; i < lista.length; i++){
		novaLista[i] = lista[i]; 
	}

	console.log(`Lista nova sem o primeiro elemento: ${novaLista}`)

	return novaLista;
}

//exercicio4
function adicionarNoInicio(lista, elemento){
	let novaLista = [];
	for(let i = 0; i < lista.length; i++){
		novaLista[i] = lista[i]; 
	}

	novaLista[0] = elemento;

	console.log(`Lista nova com o novo primeiro elemento: ${novaLista}`)

	return novaLista;
}

//exercicio5
function alterarLista(lista, elemento, indice){
	let novaLista = [];
	for(let i = 0; i < lista.length; i++){
		novaLista[i] = lista[i]; 
	}

	novaLista[indice] = elemento;

	console.log(`Lista nova com o novo primeiro elemento: ${novaLista}`)

	return novaLista;
}

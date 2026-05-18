
buscarGato();

async function buscarGato(){

	let retornoAPI = await fetch(`https://api.thecatapi.com/v1/images/search`);
	let retornoConvertido = await retornoAPI.json();
	let imagemGato = retornoConvertido[0].url
	console.log(retornoConvertido);

	cards.innerHTML += 
		`
			<div class="card-gatinho">
				<img src="${imagemGato}">
			</div>
		`
}

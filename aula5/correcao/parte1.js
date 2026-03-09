function exibirResultado(){
	let qualidade = ipt_qualidade.value;
	let valor_base = 0;

	if(qualidade == "720p"){
		valor_base = 15;
	}
	else if(qualidade == "1080p"){
		valor_base = 20;
	}
	else if(qualidade == "4K"){
		valor_base = 25;
	}
	if(valor_base == 0){
		div_mensagem.innerHTML = `Digite corretamente`;
	}
	else{
		div_mensagem.innerHTML = `O valor base do seu plano é R$ ${valor_base}`;
	}
}

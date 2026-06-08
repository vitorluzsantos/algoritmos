function exibirResultado(){
	div_mensagem.innerHTML = "";
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

	let telas_simultaneas = Number(ipt_qtd_telas.value);
	let telas_extra = Number(ipt_qtd_telas_extras.value);

	let valor_telas = 0;
	
	if(telas_simultaneas <= 2){
		valor_telas = 10;
	}
	else if(telas_simultaneas <= 4){
		valor_telas = 20;
	}
	else if (telas_simultaneas > 4){
		valor_telas = 30;
	}
	
	valor_telas += (telas_extra * 12.9);

	let valor_final = valor_base + valor_telas;
	let qtd_pessoas = telas_simultaneas + telas_extra;

	div_mensagem.innerHTML += 
	`
		O valor base do seu plano é R$${valor_base.toFixed(2)}<br>
		O valor das telas do seu plano é R$${valor_telas.toFixed(2)}<br>
		Valor final R$${valor_final}<br>
		Se quiser dividir fica R$${(valor_final / qtd_pessoas).toFixed(2)} para cada!
	`
}

function exibirResultado(){
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
		valor_telas = 30 /* deixei esse maior que quatro por que se fosse um else e desse erro no codigo ia cair nessa condição */
	}
	
	valor_telas += (telas_extra * 12.9);
	div_mensagem.innerHTML = `O valor das telas do seu plano é R$${valor_telas.toFixed(2)}`;
}

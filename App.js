( function cadastrar() {

	console.log('Cadastrar: 1');

	let counter = 0;
	setTimeout( () => {
		console.log('Cadastrar: 2');
		PopularInfos();
		console.log('Cadastrar: 3');
		
		const button = document.getElementById('cSalvar');
		
		console.log('Cadastrar: 3');
		
		if(button != undefined) {
			console.log('Cadastrar: 5 - send');
			
			console.log('Cadastrar: 6');
			
			button.click();
			
			console.log(`Tentativa de Cadastro: ${ counter }`);
		}
		
	}, 5000);
}())

function PopularInfos() {
	
	//Recupera os campos do formulário
	let dataNascimento = document.getElementById("cDataNasc").Value = '31/12/2020';
	let idade = document.getElementById("cIdade").Value = '2';
	let cpf = document.getElementById("cCpf").Value = '14255744670';
	
	/*
	Lista de postos, informar o número na frente do = 
		value="22" UBS Central - Cadastro Finalizado
		value="10" ESF. Morada Nova II
		value="12" ESF. Nogueira Machado
		value="1"  ESF. Alto Rosário - Cadastro Finalizado
		value="2"  ESF. Cidade Nova - Cadastro Finalizado
		value="3"  ESF. Garcias - Cadastro Finalizado
		value="4"  ESF. Graças - Cadastro Finalizado
		value="5"  ESF. Irmãos Auler - Cadastro Finalizado
		value="6"  ESF. Itaunense - Cadastro Finalizado
		value="7"  ESF. Jadir Marinho - Cadastro Finalizado
		value="8"  ESF. Lourdes - Cadastro Finalizado
		value="9"  ESF. Morada Nova I - Cadastro Finalizado
		value="11" ESF. Morro do Engenho - Cadastro Finalizado
		value="13" ESF. Padre Eustáquio - Cadastro Finalizado
		value="14" ESF. Parque Jardim - Cadastro Finalizado
		value="15" ESF. Piedade - Cadastro Finalizado
		value="16" ESF. Pio XII - Cadastro Finalizado
		value="17" ESF. Residencial Santanense - Cadastro Finalizado
		value="18" ESF. Santanense - Cadastro Finalizado
		value="19" ESF. São Geraldo - Cadastro Finalizado
		value="20" ESF. Várzea da Olaria - Cadastro Finalizado
		value="21" ESF. Vila Tavares - Cadastro Finalizado
	*/
	let post = document.getElementById("cPosto");
	let nome = document.getElementById("cNome");
	let numeroCateiraSUS = document.getElementById("cCarteiraSus");
	let email = document.getElementById("cEmail");
	let cep = document.getElementById("cCep");
	let rua = document.getElementById("cRua");
	let numero = document.getElementById("tNumero");
	let bairro = document.getElementById("cBairro");
	let complemento = document.getElementById("cComplemento");
	let telefoneContato = document.getElementById("cContato1");
	
	//Seta os valores no formulário
	dataNascimento.Value = '00/00/00';
	idade.Value = '0';
	cpf.Value = '00000000000';
	post.Value = '00';
	nome.Value = '';
	numeroCateiraSUS.Value = '000 0000 0000 0000';
	email.Value = 'teste@gmail.com';
	cep.Value = '00000000';
	rua.Value = '';
	numero.Value = '';
	bairro.Value = '';
	complemento.Value = '';
	telefoneContato.Value = '00 0 0000 0000';
}
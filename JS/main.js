function red(){
 	window.open("https://digitalinnovation.one/");

 	//window.location.href = "https://digitalinnovation.one/"
 }

function clicou(){
	//document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
	//cosole.log(document.getElementById("agradecimento"));
	alert("Obrigado por clicar");
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	//alert("Trocar texto");
	elemento.innerHTML = "Obrigado por passar o mouse";
	
}


function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
	alert("Página carregada");
}

function change(elemento){
	cosole.log(elemento.value);
}


/*
function validarIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));



function setReplace(frase, nome , novo_nome){
	return frase.replace(nome, novo_nome)
}

function soma(n1, n2){
	return n1 + n2;
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
alert(soma(5, 10));




var nome = "Aline Ribeiro";
var idade = 29;
var frase = "Brasil é o melho time do mundo";
alert(" Bem Vindo " + nome);
alert(nome + " tem " + idade);
console.log (nome);
console.log (idade);
console.log (frase.replace("Brasil","Alemanha"));
alert(frase.replace("Brasil","Alemanha"));
console.log (frase.toUpperCase());
console.log (frase.toLowerCase());


var lista = ["Maça","Pêra","Uva"];
lista.push("Laranja");
lista.pop();
console.log(lista[1]);
console.log(lista.reverse());
console.log(lista.join("-"));
console.log(lista.lenght);
alert(lista[1])

var fruta = {nome : "Maça", cor : "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var frutas =[{nome : "Maça", cor : "vermelha"},{nome : "Laranja", cor : "Laranja"}]
console.log(frutas);
alert(frutas[1].nome);

var idade = prompt("Qual a sua idade? ");
//var idade = 18;
if( idade >= 18){
	alert("Maior de idade");
}else{
	alert("Menor de idade");
};

var count = 0;
while (count < 5){
	console.log(count);
	count++;
	//count = count + 1;
}

var count ;
for (count = 0 ; count < 5; count++ ){
	alert(count);
}


var d = new Date();
alert(Date() );
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());*/

const nome = "Nikola Tesla";
let nome2 = "";
let pessoaDefault ={
    nome:"Yuri Antunes Franco",
    idade: "18",
    trabalho:"Programador Web"
}

let nomes = ["Yuri Antunes Franco","Marie Curie", "Newton"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome:"Yuri Antunes Franco",
        idade: "18",
        trabalho:"Programador Web"
},
{
    nome:"Marie Curie",
    idade: "25",
    trabalho:"Física, Química e Professora"
}
];


function alterarnome(){
    nome2="Marie Curie"
    console.log("Valor alterado")
console.log(nome2);
}

function recebeEalteranome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);

}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}
console.log(pessoas);

adicionarPessoa({
    nome:"Newton",
    idade:"60",
    trabalho: "Físico"
});

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome:"Marie Curie",
//    idade: "25",
//    trabalho:"Física, Química e Professora"
//});









//recebeEalteranome("Newton");
//recebeEalteranome("Marie Curie");

//alterarnome();


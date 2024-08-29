//Criar a função para coletar o CEP

function Coletar(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}

//função para usar os dados coletados 
async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)
}
//função para exibir os dados 
function ExibirDados(dados){
    document.querySelector('.Estado').value = dados.uf
    document.querySelector('.Cidade').value = dados.localidade
    document.querySelector('.Endereco').value = dados.logradouro
    document.querySelector('.DDD').value = dados.ddd
}


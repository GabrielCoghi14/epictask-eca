document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        pontos: form.pontos.value
    }

    validar(tarefa)
    
    console.log(tarefa)
})

function validar(tarefa){
    if(tarefa.titulo.trim() == ""){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText= "Titulo é obrigatório"
    }
    if(tarefa.descricao.trim() == "" || tarefa.descricao.lenght < 10){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText= "Descrição deve ter pelo menos 10 caracteres"
    }
    if(tarefa.pontos.trim() == "" || tarefa.pontos.lenght > 0){
        document.querySelector("#pontos").classList.add("is-error")
        document.querySelector("#pontos-erro").innerText= "Valor deve ser maior que 0"
    }
}

function limparErros(){
    
    document
    .querySelector("input .is-error, textarea .is-error")
    .classList
    .remove("is-error")
}
document.querySelector("#botao-perfil").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        usuario: form.usuario.value,
        senha: form.senha.value,
    }

    validar(tarefa)
    
    console.log(tarefa)
})

function validar(tarefa){
    if(tarefa.titulo.trim() == ""){
        document.querySelector("#usuario").classList.add("is-error")
        document.querySelector("#usuario-erro").innerText= "Titulo é obrigatório"
    }
    if(tarefa.descricao.trim() == "" || tarefa.descricao.lenght < 10){
        document.querySelector("#senha").classList.add("is-error")
        document.querySelector("#senha-erro").innerText= "Senha deve ter pelo menos 10 caracteres"
    }
    
}

function limparErros(){
    
    document
    .querySelector("input .is-error, textarea .is-error")
    .classList
    .remove("is-error")
}
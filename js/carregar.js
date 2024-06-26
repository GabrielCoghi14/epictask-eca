const tarefas = JSON.parse( localStorage.getItem("tarefas") ) || []

tarefas.forEach(tarefa => card(tarefa))

function card (tarefa){
    const cardTarefa = `
        <div class="nes-container with-title is-centered">
            <p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            <a href="#" class="nes-badge is-icon">
                <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
                <span class="is-primary">${tarefa.pontos}</span>
            </a>
            <progress class="nes-progress is-success" value="50" max="100"></progress>
            <button onClick ="dec (${tarefa.id})type="button" class="nes-btn is-primary">-</button>
            <button onClick ="apagar (${tarefa.id})type="button" class="nes-btn is-error">apagar</button>
            <button onClick ="inc (${tarefa.id})type="button" class="nes-btn is-primary">+</button>
        </div>    
    ` 
    const card = document.createElement("div")
    card.innerHTML = cardTarefa
    document.querySelector("#lista-de-tarefas").appendChild(card)
}
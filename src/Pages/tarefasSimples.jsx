import { useState, useEffect } from "react"


export default function TarefasSimples() {
    const [listaDeTarefas, setListaDeTarefa] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    useEffect( () => {
        const tarefasSalvas = localStorage.getItem("tarefasSimples")
        if (tarefasSalvas){
            setListaDeTarefa(JSON.parse(tarefasSalvas))
        }
    },[])

    useEffect(() => {

        if (listaDeTarefas.length > 0) {
            localStorage.setItem("tarefasSimples", JSON.stringify(listaDeTarefas))
        }

    }, [listaDeTarefas])




    function adicionarTarefa() {
        if (novaTarefa.trim() == "") {                     // caso não for digitado nada
            return
        }
        // se foi digitado um texto valido
        // Cria um novo array com as tarefas antigas + a nova tarefa
        setListaDeTarefa([...listaDeTarefas, novaTarefa])
        setNovaTarefa("")

    }
    function removerTarefa(posicaoNoIndex) {
        const listaAtualizada = listaDeTarefas.filter((tarefa, i) => {
            return posicaoNoIndex != i
        })
        setListaDeTarefa(listaAtualizada)



    }

    function ordenarTarefas() {
        const listaOrdenada = [...listaDeTarefas].sort((a, b) => a.localeCompare(b))
        setListaDeTarefa(listaOrdenada)
    }

    return (
        <div className="contaainer mt-5" style={{ maxWidth: '500px' }}>

            <h1>Tarefas simples</h1>


            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite a nova tarefa"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />
                <button className="btn btn-primary" onClick={adicionarTarefa}>
                    adicionar
                </button>

                <button className="btn btn-warning btn-sm" onClick={ordenarTarefas}>
                    ordenarTarefas
                </button>

            </div>
            <ul className="list-group">
                {listaDeTarefas.length == 0 && (
                    <li className="list-group-item text-center text-muted">
                        nenhuma tarefa adicionada
                    </li>
                )}
                {listaDeTarefas.map((tarefa, posicaoNoIndex) => (
                    <li
                        key={posicaoNoIndex}
                        className="list-group-item d-flex justify-content-between"
                    >
                        {tarefa}
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removerTarefa(posicaoNoIndex)}>
                            remover
                        </button>
                    </li>

                ))}





                {/* {</li class="list-group-item">An item</li> */}

            </ul>
        </div>
    )

}
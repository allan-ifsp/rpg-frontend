import { useState } from 'react';

export function CadastrarPersonagem() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }
        let bodyContent = "nome=" + inputs.nome + "&descricao=" + inputs.descricao + "&status=" + inputs.status + "&idMestre=" + inputs.idMestre;
        let response = await fetch('http://localhost:9000/personagem/add', {
            method: "POST",
            headers: headersList,
            body: bodyContent,
        }).then(response => {
            console.log(response);
            return response.json();
        }).catch(() => console.log(inputs))

        let data = await response.text();
        console.log(data);
    }

    return (
        <div>
            <h3>Cadastrar Personagem</h3>

            <form onSubmit={handleSubmit}>
                <label>Nome:<br />
                    <input
                        type="text"
                        name="nome"
                        value={inputs.nome || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <label>Descrição:<br />
                    <input
                        type="text"
                        name="descricao"
                        value={inputs.descricao || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <label>Identificador do Mestre:<br />
                    <input
                        type="number"
                        name="idMestre"
                        value={inputs.idMestre || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <label>Status do Personagem<br />
                    <input
                        type="text"
                        name="status"
                        value={inputs.status || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
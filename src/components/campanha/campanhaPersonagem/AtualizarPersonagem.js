import { useState } from 'react';

export function AtualizarCampanhaPersonagem() {
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
        let bodyContent = "campanhaId=" + inputs.campanhaId + "&personagemId=" + inputs.personagemId +  "&conquista=" + inputs.conquista;
        let response = await fetch(`http://localhost:9000/campanhaPersonagem/${inputs.id}`, {
            method: "PUT",
            headers: headersList,
            body: bodyContent,
        }).then(response => {
            console.log(response);
            return response.json();
        })

        let data = await response.text();
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:<br />
                <input
                    type="number"
                    name="id"
                    value={inputs.id || ""}
                    onChange={handleChange}
                />
            </label><br />
            <label>Identificador da Campanha:<br />
                <input
                    type="number"
                    name="campanhaId"
                    value={inputs.campanhaId || ""}
                    onChange={handleChange}
                />
            </label><br />
            <label>Identificador do Personagem:<br />
                <input
                    type="number"
                    name="personagemId"
                    value={inputs.personagemId || ""}
                    onChange={handleChange}
                />
            </label><br />
            <label>Conquista:<br />
                <input
                    type="text"
                    name="conquista"
                    value={inputs.conquista || ""}
                    onChange={handleChange}
                />
            </label><br />
            <input type="submit" value="Enviar" />
        </form>
    )
}
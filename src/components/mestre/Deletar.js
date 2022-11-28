import { useState } from 'react';

export function DeletarMestre() {
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

        let bodyContent = "nome=" + inputs.nome + "&login=" + inputs.login + "&senha=" + inputs.senha;

        let response = await fetch(`http://localhost:9000/mestre/${inputs.id}`, {
            method: "DELETE",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);
    }

    return (
        <div>
            <h3>Deletar Mestre</h3>
            <form onSubmit={handleSubmit}>
                <label>ID:<br />
                    <input
                        type="number"
                        name="id"
                        value={inputs.id || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Deletar" />
            </form>
        </div>
    )
}
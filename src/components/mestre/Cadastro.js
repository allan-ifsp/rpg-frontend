import { useState } from 'react';

export function CadastrarMestre() {
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
        let response = await fetch('http://localhost:9000/mestre/add', {
            method: "POST",
            headers: headersList,
            body: bodyContent,
        }).then(response => {
            console.log(response);
            return response.json();
        }).catch(() => console.log('falha ao cadastrar'))

        let data = await response.text();
        console.log(data);
    }

    return (
        <div>
            <h3>Cadastrar Mestre</h3>
            <form onSubmit={handleSubmit}>
                <label>Nome:<br />
                    <input
                        type="text"
                        name="nome"
                        value={inputs.nome || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <label>Login:<br />
                    <input
                        type="text"
                        name="login"
                        value={inputs.login || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <label>Senha:<br />
                    <input
                        type="password"
                        name="senha"
                        value={inputs.senha || ""}
                        onChange={handleChange}
                    />
                </label><br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
import { useState, useEffect } from 'react';

// function handleSubmit(e) {
//     useEffect(() => {
//         // POST request using fetch inside useEffect React hook
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ nome: e. })
//         };
//         fetch('http://localhost:9000/mestre/add', requestOptions)
//             .then(response => response.json())
//             .then(data => setPostId(data.id));

//         // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);

// }

export function CadastrarMestre() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    const hehe = useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        fetch('https://localhost:9000/mestre/todos', requestOptions)
            .then(response => response.json())
            // .then(data => setPostId(data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <form onSubmit={hehe}>
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
                    type="text"
                    name="senha"
                    value={inputs.senha || ""}
                    onChange={handleChange}
                />
            </label><br />
            <input type="submit" value="Enviar" />
        </form>
    )
}

// export function CadastrarMestre() {

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Nome:<br />
//                 <input type="text" />
//             </label><br />
//             <label>
//                 Login:<br />
//                 <input type="text" />
//             </label><br />
//             <label>
//                 Senha:<br />
//                 <input type="password" />
//             </label><br />
//             <input type="submit" value="Enviar" />

//         </form>
//     )

// }
// { <section class="layout-content" layout:fragment="corpo">

//     <nav class="navbar navbar-expand-md bg-light">
//         <div class="collapse navbar-collapse" id="navbarsExampleDefault">
//             <ul class="navbar-nav mr-auto">
//                 <li class="nav-item active">
//                     <i class="oi oi-caret-right"></i>
//                     <span>Cadastrar Mestres</span>
//                 </li>
//             </ul>
//             <a class="btn btn-primary btn-md" href="/mestres/listar" role="button">
//                 <span class="oi oi-spreadsheet" title="Listar" aria-hidden="true"></span>
//                 <span>Listar mestres</span>
//             </a>
//         </div>
//     </nav>

//     <div class="container" id="cadastro">
//         <div th:replace="fragments/alert :: alert"></div>
//         <form th:action="${mestre.id == null} ? @{/mestres/salvar} : @{/mestres/editar}" th:object="${mestre}"
//             method="POST">
//             <div class="form-row">
//                 <div class="form-group col-md-6">
//                     <label for="nome">Nome</label>
//                     <input type="text" class="form-control" id="nome" placeholder="Nome Mestre" autofocus="autofocus"
//                         th:field="*{nome}" />
//                 </div>
//                 <div class="form-group col-md-6">
//                     <label for="login">Login</label>
//                     <input type="text" class="form-control" id="login" placeholder="Login" autofocus="autofocus"
//                         th:field="*{login}" />
//                 </div>
//                 <div class="form-group col-md-6">
//                     <label for="senha">Senha</label>
//                     <input type="text" class="form-control" id="senha" placeholder="Senha" autofocus="autofocus"
//                         th:field="*{senha}" />
//                 </div>

//             </div>
//             <input type="hidden" id="id" th:field="*{id}" />
//             <button type="submit" class="btn btn-primary btn-sm">Salvar</button>
//         </form>

//     </div>


// </section>}
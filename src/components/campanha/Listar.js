import { useState, useEffect } from 'react';
import { AtualizarCampanha } from './Atualizar';


export function ListarCampanha() {
    const [campanhas, setCampanhas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/campanha/todos")
            .then(response => response.json())
            .then(listaCampanhas => {
                setCampanhas(listaCampanhas)
            })
    });

    return (
        <div className='lista'>
            <h3>Campanhas</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {campanhas.map((campanha, indice) => {
                        console.log(campanha)
                        return (
                            <tr>
                                <td>{campanha.id}</td>
                                <td>{campanha.nome}</td>
                                <td>{campanha.descricao}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}
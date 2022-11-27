import { useState, useEffect } from 'react';
import { AtualizarPersonagem } from './Atualizar';


export function ListarPersonagem() {
    const [personagens, setpersonagens] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/personagem/todos")
            .then(response => response.json())
            .then(listapersonagens => {
                setpersonagens(listapersonagens)
            })
    });

    return (
        <div className='lista'>
            <h3>Listagem de personagens</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {personagens.map((personagem, indice) => {
                        console.log(personagem)
                        return (
                            <tr>
                                <td>{personagem.id}</td>
                                <td>{personagem.nome}</td>
                                <td>{personagem.descricao}</td>
                                <td>{personagem.status}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}
import { useState, useEffect } from 'react';
import { AtualizarMestre } from './Atualizar';


export function ListarMestre() {
    const [mestres, setMestres] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/mestre/todos")
            .then(response => response.json())
            .then(listaMestres => {
                setMestres(listaMestres)
            })
    });

    return (
        <div className='lista'>
            <h3>Listagem de mestres</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {mestres.map((mestre, indice) => {
                        console.log(mestre)
                        return (
                            <tr>
                                <td>{mestre.id}</td>
                                <td>{mestre.nome}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}
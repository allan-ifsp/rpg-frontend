import { useState, useEffect } from 'react';

export function ListarCampanhaPersonagem() {
    const [campanhaPersonagem, setcampanhaPersonagem] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/campanhaPersonagem/todos")
            .then(response => response.json())
            .then(listaCampanhaPersonagem => {
                console.log(listaCampanhaPersonagem);
                setcampanhaPersonagem(listaCampanhaPersonagem)
            })
    });

    return (
        <div className='lista'>
            <h3>Personagem que estão nesta campanha</h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Campanha</th>
                        <th>Conquista</th>
                    </tr>
                </thead>
                <tbody>
                    {campanhaPersonagem.map((campanha, indice) => {
                        console.log(campanha)
                        return (
                            <tr>
                                <td>{campanha[0]}</td>
                                <td>{campanha[1]}</td>
                                <td>{campanha[2]}</td>
                                <td>{campanha[3]}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}
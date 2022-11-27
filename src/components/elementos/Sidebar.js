import React, { useState } from 'react';
import { CadastrarMestre } from '../mestre/Cadastro';
import { Listar } from '../mestre/Listar';



export function Sidebar() {
    const [showContent, setShowContent] = useState("")
    return (
        <div>
            
            <nav>
                <ul>
                    <li>
                        <a onClick={() => setShowContent()}>Home</a>
                    </li>
                </ul>
                <ul>
                    <li>Mestres</li>
                    <li><a onClick={() => setShowContent(<CadastrarMestre />)}>Cadastrar</a></li>
                    <li><a onClick={() => setShowContent(<Listar />)}>Listar</a></li>
                </ul>
                <ul>
                    <li>Personagens</li>
                    <li><a href="/mestres/cadastrar">Cadastrar</a></li>
                    <li><a href="/mestres/listar">Listar</a></li>
                </ul>
                <ul>
                    <li>Habilidades</li>
                    <li><a href="/mestres/cadastrar">Cadastrar</a></li>
                    <li><a href="/mestres/listar">Listar</a></li>
                </ul>
                <ul>
                    <li>Campanhas</li>
                    <li><a href="/mestres/cadastrar">Cadastrar</a></li>
                    <li><a href="/mestres/listar">Listar</a></li>
                </ul>
            </nav>
            {showContent}
        </div>
    )
}
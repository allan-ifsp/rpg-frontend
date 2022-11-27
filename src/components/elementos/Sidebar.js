import React, { useState } from 'react';

import { AtualizarMestre } from '../mestre/Atualizar';
import { CadastrarMestre } from '../mestre/Cadastro';
import { DeletarMestre } from '../mestre/Deletar';
import { ListarMestre } from '../mestre/Listar';

import { AtualizarCampanha } from '../campanha/Atualizar';
import { CadastrarCampanha } from '../campanha/Cadastro';
import { DeletarCampanha } from '../campanha/Deletar';
import { ListarCampanha } from '../campanha/Listar';

import { AtualizarPersonagem } from '../personagem/Atualizar';
import { CadastrarPersonagem } from '../personagem/Cadastro';
import { DeletarPersonagem } from '../personagem/Deletar';
import { ListarPersonagem } from '../personagem/Listar';

import { CadastrarCampanhaPersonagem } from '../campanha/campanhaPersonagem/CadastroPersonagem';
import { AtualizarCampanhaPersonagem } from '../campanha/campanhaPersonagem/AtualizarPersonagem';
import { DeletarCampanhaPersonagem } from '../campanha/campanhaPersonagem/DeletarPersonagem';
import { ListarCampanhaPersonagem } from '../campanha/campanhaPersonagem/ListarPersonagem';



export function Sidebar() {
    const [showContent, setShowContent] = useState("")
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <li>
                        <a onClick={() => setShowContent()}>Home</a>
                    </li>
                </ul>
                <ul>
                    <li>Mestres</li>
                    <li><a onClick={() => setShowContent(<CadastrarMestre />)}>Cadastrar</a></li>
                    <li><a onClick={() => setShowContent(<ListarMestre />)}>Listar</a></li>
                    <li><a onClick={() => setShowContent(<AtualizarMestre />)}>Atualizar</a></li>
                    <li><a onClick={() => setShowContent(<DeletarMestre />)}>Deletar</a></li>   
                </ul>
                <ul>
                    <li>Personagens</li>
                    <li><a onClick={() => setShowContent(<CadastrarPersonagem />)}>Cadastrar</a></li>
                    <li><a onClick={() => setShowContent(<ListarPersonagem />)}>Listar</a></li>
                    <li><a onClick={() => setShowContent(<AtualizarPersonagem />)}>Atualizar</a></li>
                    <li><a onClick={() => setShowContent(<DeletarPersonagem />)}>Deletar</a></li>
                </ul>
                <ul>
                    <li>Campanhas</li>
                    <li><a onClick={() => setShowContent(<CadastrarCampanha />)}>Cadastrar</a></li>
                    <li><a onClick={() => setShowContent(<ListarCampanha />)}>Listar</a></li>
                    <li><a onClick={() => setShowContent(<AtualizarCampanha />)}>Atualizar</a></li>
                    <li><a onClick={() => setShowContent(<DeletarCampanha />)}>Deletar</a></li>

                    <li><a onClick={() => setShowContent(<CadastrarCampanhaPersonagem />)}>Adicionar personagem na campanha</a></li>
                    <li><a onClick={() => setShowContent(<AtualizarCampanhaPersonagem />)}>Atualizar personagem na campanha</a></li>
                    <li><a onClick={() => setShowContent(<DeletarCampanhaPersonagem />)}>Deletar personagem da campanha</a></li>
                    <li><a onClick={() => setShowContent(<ListarCampanhaPersonagem />)}>Listar personagem da campanha</a></li>
                </ul>
            </nav>
            {showContent}
        </div>
    )
}
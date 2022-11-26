export function Header() {
    return (
        <header>RPG - WIKI</header>
    )
}

export function Footer() {
    return (
        <footer>
            <span class="footer-copy">&copy; 2022 RPG WIKI</span>
        </footer>
    );
}

export function Sidebar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
            <ul>
                <li>Mestres</li>
                <li><a href="/mestres/cadastrar">Cadastrar</a></li>
                <li><a href="/mestres/listar">Listar</a></li>
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
    )
}

// export function Modal() {
//     return (
//         <div>
//             <div class="modal-header">
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
//                 <h4 class="modal-title">Atenção</h4>
//             </div>
//             <div class="modal-body">
//                 <p>Clique em Ok para proceder com a exclusão.&hellip;</p>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
//                 <button id="ok_confirm" type="button" class="btn btn-primary">Ok</button>
//             </div><div class="modal-header">
//                 <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
//                 <h4 class="modal-title">Atenção</h4>
//             </div>
//             <div class="modal-body">
//                 <p>Clique em Ok para proceder com a exclusão.&hellip;</p>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
//                 <button id="ok_confirm" type="button" class="btn btn-primary">Ok</button>
//             </div>
//         </div>
//     )
// }
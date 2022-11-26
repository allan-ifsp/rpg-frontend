export function Cadatrar(){
    return(
        <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    )
    
}
<section class="layout-content" layout:fragment="corpo">

    <nav class="navbar navbar-expand-md bg-light">
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <i class="oi oi-caret-right"></i>
                    <span>Cadastrar Mestres</span>
                </li>
            </ul>
            <a class="btn btn-primary btn-md" href="/mestres/listar" role="button">
                <span class="oi oi-spreadsheet" title="Listar" aria-hidden="true"></span>
                <span>Listar mestres</span>
            </a>
        </div>
    </nav>

    <div class="container" id="cadastro">
        <div th:replace="fragments/alert :: alert"></div>
        <form th:action="${mestre.id == null} ? @{/mestres/salvar} : @{/mestres/editar}" th:object="${mestre}"
            method="POST">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" id="nome" placeholder="Nome Mestre" autofocus="autofocus"
                        th:field="*{nome}" />
                </div>
                <div class="form-group col-md-6">
                    <label for="login">Login</label>
                    <input type="text" class="form-control" id="login" placeholder="Login" autofocus="autofocus"
                        th:field="*{login}" />
                </div>
                <div class="form-group col-md-6">
                    <label for="senha">Senha</label>
                    <input type="text" class="form-control" id="senha" placeholder="Senha" autofocus="autofocus"
                        th:field="*{senha}" />
                </div>

            </div>
            <input type="hidden" id="id" th:field="*{id}" />
            <button type="submit" class="btn btn-primary btn-sm">Salvar</button>
        </form>

    </div>


</section>
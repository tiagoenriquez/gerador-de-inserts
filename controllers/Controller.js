class Controller {
    cadastrar() {
        CadastroPage();
    }

    /**
     * 
     * @param {string} tabela 
     * @param {string} dados 
     */
    gerarInserts(tabela, dados) {
        InsertsPage(new Inserts(tabela, dados));
    }
}
function CadastroPage() {
    function gerarInserts() {
        new Controller().gerarInserts(
            document.getElementById('tabela').value,
            document.getElementById('dados').value
        );
    }

    /**
     * @private
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading('Cadastro de Dados'),
        CampoDeDigitacao('Nome da tabela', 'tabela'),
        TextArea('dados', 'Insira os dados aqui.'),
        Button(gerarInserts, 'Gerar Inserts')
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}
/**
 * 
 * @param {Inserts} inserts 
 */
function InsertsPage(inserts) {
    /**
     * @private
     * @type {HTMLElement[]}
     */
    const elements = [
        Heading('Inserts'),
        TextArea('inserts', inserts.getComandoSql())
    ];

    const page = Page();

    elements.forEach((element) => {
        page.appendChild(element);
    });
}
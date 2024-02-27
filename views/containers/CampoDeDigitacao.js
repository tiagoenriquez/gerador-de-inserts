/**
 * 
 * @param {string} label 
 * @param {string} id 
 * @returns {HTMLDivElement}
 */
function CampoDeDigitacao(label, id) {
    const campoDeDigitacao = document.createElement('div');
    campoDeDigitacao.className = 'row-container';
    campoDeDigitacao.appendChild(Label(id, label));
    campoDeDigitacao.appendChild(Input(id));
    return campoDeDigitacao;
}
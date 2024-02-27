/**
 * 
 * @param {string} id
 * @param {string} textContent 
 * @returns {HTMLLabelElement}
 */
function Label(id, textContent) {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = textContent;
    return label;
}
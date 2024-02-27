/**
 * 
 * @param {string} id 
 * @returns {HTMLInputElement}
 */
function Input(id) {
    const input = document.createElement('input');
    input.id = id;
    return input;
}
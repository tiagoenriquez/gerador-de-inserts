/**
 * 
 * @param {() => void} action 
 * @param {string} textContent 
 * @returns {HTMLButtonElement}
 */
function Button(action, textContent) {
    const button = document.createElement('button');
    button.addEventListener('click', action);
    button.textContent = textContent;
    return button;
}
/**
 * 
 * @param {string} id 
 * @param {string} textContent 
 * @returns {HTMLTextAreaElement}
 */
function TextArea(id, textContent) {
    const textArea = document.createElement('textarea');
    textArea.id = id;
    textArea.textContent = textContent;
    textArea.cols = 128;
    textArea.rows = 16;
    return textArea;
}
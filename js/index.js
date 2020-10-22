const body = document.querySelector('body');
const container = document.querySelector('.container');

const checkLetter = (letter) => {
    if (letter.length === 1 && letter.match(/^\p{L}+$/u)) return true;
    return false;
}; 

const addLetter = (text) => {
    if (checkLetter(text)) {
        const div = document.createElement('div');
        div.innerText = text;
        div.className = 'fade__in';
        container.appendChild(div);
    }
};

body.addEventListener('keydown', (e) => addLetter(e.key));
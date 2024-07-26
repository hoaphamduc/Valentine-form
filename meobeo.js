const disagreeTexts = [
    'Không 😒',
    'Em chắc chứ? 😯',
    'Thật không? 🤔',
    'Suy nghĩ lại đi 😅',
    'Đừng từ chối mà 😢',
    'Hoy iu anh đi màaa huhu 😢'
];
let currentTextIndex = 0;

document.getElementById('disagree').addEventListener('click', function () {
    const agreeButton = document.getElementById('agree');
    const disagreeButton = document.getElementById('disagree');
    const currentFontSize = parseFloat(window.getComputedStyle(agreeButton, null).getPropertyValue('font-size'));
    const currentWidth = parseFloat(window.getComputedStyle(agreeButton, null).getPropertyValue('width'));
    const currentHeight = parseFloat(window.getComputedStyle(agreeButton, null).getPropertyValue('height'));

    agreeButton.style.width = `${currentWidth * 1.25}px`;
    agreeButton.style.height = `${currentHeight * 1.25}px`;

    agreeButton.style.fontSize = `${currentFontSize * 1.25}px`;

    currentTextIndex = (currentTextIndex + 1) % disagreeTexts.length;
    disagreeButton.textContent = disagreeTexts[currentTextIndex];
});

document.getElementById('agree').addEventListener('click', function () {
    document.getElementById('answer-container').style.display = 'none';
    document.getElementById('question').textContent = 'Anh cũng iu em nhìu lémmm 😍';
    document.getElementById('question-img').src = 'https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp';
});
// ==UserScript==
// @name         Transformar Texto em Maiúsculo e Minúsculo
// @namespace    DayLight Scripts
// @version      1.3
// @description  Botões para transformar a primeira linha de texto em maiúsculo ou minúsculo
// @author       DayLight
// @match        https://pt.anotepad.com/
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/Transformar Texto em Maiúsculo e Minúsculo.user.js
// @updateURL    https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/Transformar Texto em Maiúsculo e Minúsculo.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Função para criar um botão
    function createButton(label, onClick) {
        const button = document.createElement('button');
        button.innerText = label;
        button.style.padding = '5px 8px';
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.marginRight = '5px'; // Espaçamento entre os botões
        button.addEventListener('click', onClick);
        return button;
    }

    // Adiciona os botões ao DOM
    const textareaContainer = document.querySelector('.col-sm-12');
    if (textareaContainer) {
        textareaContainer.style.position = 'relative';

        // Cria um contêiner para os botões
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex'; // Flexbox para alinhar os botões lado a lado
        buttonContainer.style.marginBottom = '10px'; // Espaçamento abaixo dos botões

        const uppercaseButton = createButton('B', () => {
            const textarea = document.getElementById('edit_textarea');
            const text = textarea.value;

            // Seleciona a primeira linha
            const firstLineEndIndex = text.indexOf('\n') !== -1 ? text.indexOf('\n') : text.length;
            const firstLine = text.slice(0, firstLineEndIndex);

            // Transforma a primeira linha em maiúsculo
            const uppercaseFirstLine = firstLine.toUpperCase();

            // Atualiza o conteúdo do textarea
            textarea.value = uppercaseFirstLine + text.slice(firstLineEndIndex);
        });

        const lowercaseButton = createButton('b', () => {
            const textarea = document.getElementById('edit_textarea');
            const text = textarea.value;

            // Seleciona a primeira linha
            const firstLineEndIndex = text.indexOf('\n') !== -1 ? text.indexOf('\n') : text.length;
            const firstLine = text.slice(0, firstLineEndIndex);

            // Transforma a primeira linha em minúsculo
            const lowercaseFirstLine = firstLine.toLowerCase();

            // Atualiza o conteúdo do textarea
            textarea.value = lowercaseFirstLine + text.slice(firstLineEndIndex);
        });

        // Adiciona os botões ao contêiner
        buttonContainer.appendChild(uppercaseButton);
        buttonContainer.appendChild(lowercaseButton);

        // Insere o contêiner de botões antes do textarea
        textareaContainer.insertBefore(buttonContainer, textareaContainer.firstChild);
    }
})();

// ==UserScript==
// @name         RAKUTEN Fix
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Modifica links selecionados para copiar para a área de transferência
// @author       DAyLight
// @match        https://pt.anotepad.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Cria o botão
    const button = document.createElement('button');
    button.innerText = 'Modificar Link';
    button.style.position = 'fixed';
    button.style.top = '110px';
    button.style.right = '10px';
    button.style.zIndex = '1000';
    button.style.padding = '10px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    document.body.appendChild(button);

    button.addEventListener('click', () => {
        const selection = window.getSelection().toString().trim();

        // Verifica se há um texto selecionado
        if (selection) {
            // Encontra o índice do ";" e do "&#"
            const semicolonIndex = selection.indexOf(';');
            const ampIndex = selection.indexOf('&#');

            // Verifica se ambos os índices existem
            if (semicolonIndex !== -1 && ampIndex !== -1) {
                // Obtém a parte do link antes do ";"
                const beforeSemi = selection.substring(0, semicolonIndex + 1);
                // Obtém a parte do link após o ";", até o "&#"
                const afterSemi = selection.substring(semicolonIndex + 1, ampIndex);
                // Obtém a parte do link após o "&#"
                const afterAmp = selection.substring(ampIndex);

                // Combina as partes para criar o novo link
                const newLink = `${beforeSemi}${afterSemi.replace(/&#43;/g, '')}${afterAmp}`;

                // Remove qualquer ocorrência indesejada de '&#43;' no meio do link e adiciona apenas uma no final
                const finalLink = newLink.replace(/&#43;+/g, '') + '';

                // Copia o novo link para a área de transferência
                navigator.clipboard.writeText(finalLink).then(() => {
                    showNotification('Link modificado e copiado para a área de transferência.');
                    // Abre o link em uma nova aba
                    window.open(finalLink, '_blank');
                }).catch(err => {
                    console.error('Erro ao copiar para a área de transferência: ', err);
                });
            } else {
                showNotification('Formato de link inválido. Certifique-se de que o link contém ";" e "&#".');
            }
        } else {
            showNotification('Por favor, selecione um texto.');
        }
    });

    // Função para mostrar uma notificação na tela
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.innerText = message;
        notification.style.position = 'fixed';
        notification.style.top = '220px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#333';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1001';
        notification.style.transition = 'opacity 0.5s';
        notification.style.opacity = '1';

        document.body.appendChild(notification);

        // Remover a notificação após 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500); // Tempo para esperar a transição de opacidade
        }, 3000);
    }
})();

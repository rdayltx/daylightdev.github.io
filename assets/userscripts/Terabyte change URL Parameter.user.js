// ==UserScript==
// @name         Terabyte change URL Parameter
// @namespace    Change URL Parameters
// @version      1.0
// @description  Substitui qualquer '?p=' seguido de um número na URL por '?p=1449840'
// @author       DayLight
// @match        https://www.terabyteshop.com.br/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/Terabyte change URL Parameter.user.js
// @downloadURL  https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/Terabyte change URL Parameter.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Função para substituir ou adicionar o parâmetro na URL
    function replaceOrAddUrlParameter() {
        const url = new URL(window.location.href);
        const searchParams = url.searchParams;

        // Verifica se existe o parâmetro 'p'
        if (searchParams.has('p')) {
            // Verifica se o valor de 'p' é diferente de '1449840'
            if (searchParams.get('p') !== '1449840') {
                // Altera o valor do parâmetro 'p' para '1449840'
                searchParams.set('p', '1449840');
                // Atualiza a URL com o novo parâmetro
                window.location.href = url.toString();
            }
        } else {
            // Se o parâmetro 'p' não existe, adiciona-o com o valor '1449840'
            searchParams.append('p', '1449840');
            // Atualiza a URL com o novo parâmetro
            window.location.href = url.toString();
        }
    }

    // Executa a função
    replaceOrAddUrlParameter();
})();

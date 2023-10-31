// ==UserScript==
// @name         BingRewards URL Modifier
// @namespace    https://yournamespace.com
// @version      1.0
// @description  Modifies the URL with a new random sequence every 10 seconds
// @author       Your Name
// @match        https://www.bing.com/search?q=*&form=WSBEDG
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function modifyAndRedirect() {
        // Obter a URL atual
        const currentURL = window.location.href;

        // Encontrar a parte da URL entre "https://www.bing.com/search?q=" e "&form=WSBEDG"
        const searchString = currentURL.match(/https:\/\/www\.bing\.com\/search\?q=(.*?)&form=WSBEDG/);

        if (searchString && searchString.length >= 2) {
            // A sequência aleatória
            const randomString = Math.random().toString(36).substring(7);

            // Construir a nova URL com a sequência aleatória
            const newURL = currentURL.replace(searchString[1], randomString);

            // Redirecionar para a nova URL
            window.location.href = newURL;
        }

        // Agendar a próxima execução após 10 segundos
        setTimeout(modifyAndRedirect, 10000);
    }

    // Chamada inicial para iniciar o processo
    setTimeout(modifyAndRedirect, 10000);
})();

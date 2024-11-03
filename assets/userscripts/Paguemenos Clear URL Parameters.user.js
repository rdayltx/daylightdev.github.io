// ==UserScript==
// @name         Paguemenos Clear URL Parameters
// @namespace    Clear URL Parameters
// @version      1.0
// @description  Remove parâmetros desnecessários de URLs de sites especificos
// @author       DayLight
// @match        *://www.paguemenos.com.br/*
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/Paguemenos Clear URL Parameters.user.js
// @updateURL    https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/Paguemenos Clear URL Parameters.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Verifica se a URL atual contém parâmetros de rastreamento
    const url = new URL(window.location.href);
    if (url.search) {
        // Remove os parâmetros de rastreamento
        url.search = '';

        // Redireciona para a URL sem parâmetros
        window.history.replaceState(null, '', url.href);
    }
})();

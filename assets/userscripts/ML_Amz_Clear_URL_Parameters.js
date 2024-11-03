// ==UserScript==
// @name          ML, Amz. Clear URL Parameters
// @namespace     Clear URL Parameters
// @version       1.0
// @description   Remove parâmetros desnecessários de URLs de sites especificos
// @author        DayLight
//
// ============== MERCADO LIVRE ==============
// @match         https://www.mercadolivre.com.br/*
// @match         https://produto.mercadolivre.com.br/*
// @exclude-match https://www.mercadolivre.com.br/social*
// exclude-match  https://mercadolivre.com/sec*
// @exclude-match https://www.mercadolivre.com.br/ofertas*
// @exclude-match https://www.mercadolivre.com.br/cupons*
// @exclude-match https://www.mercadolivre.com.br/c/*
// @exclude-match https://www.mercadolivre.com.br/ajuda
// @exclude-match https://www.mercadolivre.com.br/vendas/*
// @exclude-match https://www.mercadolivre.com.br/syi/*
// @exclude-match https://www.mercadolivre.com.br/supermercado/*
// @exclude-match https://www.mercadolivre.com.br/gz/*
// @exclude-match https://www.mercadolivre.com.br/assinaturas*
// @exclude-match https://www.mercadolivre.com.br/credits/*
// @exclude-match https://www.mercadolivre.com.br/my-reviews*
// @exclude-match https://www.mercadolivre.com.br/perguntas/*
// @exclude-match https://www.mercadolivre.com.br/navigation*
//
//
// ============== AMAZON ==============
// @match         https://www.amazon.com.br/*
// @exclude-match https://www.amazon.com.br/gp/*
// @exclude-match https://www.amazon.com.br/hz/*
// @exclude-match https://www.amazon.com.br/kindle-dbs*
// @exclude-match https://www.amazon.com.br/mn*
// @exclude-match https://www.amazon.com.br/myk*
// @exclude-match https://www.amazon.com.br/b/*
// @exclude-match https://www.amazon.com.br/gp/*
// @exclude-match https://www.amazon.com.br/dp/*
// @exclude-match https://www.amazon.com.br/prime*
// @exclude-match https://www.amazon.com.br/gcx*
// @exclude-match https://www.amazon.com.br/baby-reg*
//
// @run-at       document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/ML_Amz_Clear_URL_Parameters.js
// @updateURL    https://raw.githubusercontent.com/rdayltx/daylightdev.github.io/refs/heads/master/assets/userscripts/ML_Amz_Clear_URL_Parameters.js
// ==/UserScript==

(function() {
    'use strict';

    // Pega a URL atual
    let url = window.location.href;

    // Procura o primeiro "#" ou "?" na URL e remove tudo após ele
    let cleanedUrl = url.split('#')[0].split('?')[0];

    // Se a URL foi alterada, redireciona para a URL limpa
    if (url !== cleanedUrl) {
        window.location.replace(cleanedUrl);
    }
})();

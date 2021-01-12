// ==UserScript==
// @name         Logseq 助手
// @namespace    https://github.com/lifesign/GM-logseq
// @version      0.1
// @description  Logseq 助手，增强 Logseq 体验
// @author       Lifesign
// @match        https://logseq.com/
// @require      https://unpkg.com/hotkeys-js@3.8.1/dist/hotkeys.min.js
// ==/UserScript==

(function() {
    'use strict';

    //防止 focus 在 text area 的时候失效
    hotkeys.filter = function(event){
        return true;
    };

    hotkeys('ctrl+s, command+s', function() {
        console.log("cmd/ctrl+s shortcuts was disabled for logseq");
        return false;
    });
})();

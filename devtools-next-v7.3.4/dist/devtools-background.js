"use strict";(()=>{var e=!1,a=0;chrome.devtools.network.onNavigated.addListener(n);var t=setInterval(n,1e3);n();function n(){if(e||a++>10){clearInterval(t);return}chrome.devtools.inspectedWindow.eval("!!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && (window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue || window.__VUE_DEVTOOLS_GLOBAL_HOOK__.apps.length))",o=>{!o||e||(clearInterval(t),e=!0,chrome.devtools.panels.create("Vue","icons/128.png","pages/devtools-panel.html",_=>{_.onShown.addListener(r=>{})}))})}})();

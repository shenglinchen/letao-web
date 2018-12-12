var designWidth = 750;
var designFont = 200;
function setHtmlFontSize () {
    var clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = clientWidth / (designWidth / designFont) + "px";
}

setHtmlFontSize();
window.addEventListener("resize", setHtmlFontSize);
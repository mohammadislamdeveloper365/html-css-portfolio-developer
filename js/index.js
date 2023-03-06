let closeMenu = getElement('.portfolio--header-navbar-close-menu');
let openMenu = getElement('.portfolio--header-navbar-open-menu');
let mainMenu =  getElement('.portfolio--header-navbar-main-menu');

addListener(openMenu,'click', function () {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    mainMenu.style.display = 'flex';
})

addListener(closeMenu,'click',function () {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    mainMenu.style.display = 'none';
})
function addListener(element, eventType, callBack) {
    element.addEventListener(eventType,callBack);
}

function getElement(id) {
    return document.querySelector(id);
}



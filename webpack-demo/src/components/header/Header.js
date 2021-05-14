function HeaderComponent(element) {
element.insertAdjacentHTML('afterbegin', '<header id="header" class="header"><div class="header__content wrapper"><input type="radio" name="radioBy" id="radioByRegion"><label for="radioByRegion">By Region</label> <input type="radio" name="radioBy" id="radioByLanguage"><label for="radioByLanguage">By Language</label></div></header>');
}



export {HeaderComponent}


function renderRegionSelect(element, data) {
    element.insertAdjacentHTML('afterbegin', `<select id="select_region" class="select">       
</select>`)

    for (let i = 0; i < data.getRegionsList().length; i++) {
        document.querySelector('#select_region').insertAdjacentHTML('afterbegin', `
        <option id="region_${data.getRegionsList()[i]}" value="${data.getRegionsList()[i]}">${data.getRegionsList()[i]}</option>
   
        `)
    }
}

function renderLanguageSelect(element, data) {
    element.insertAdjacentHTML('afterbegin', `<select id="select_language" class="select">       
</select>`)

    for (let i = 0; i < data.getLanguagesList().length; i++) {
        document.querySelector('#select_language').insertAdjacentHTML('afterbegin', `
        <option id="language_${data.getLanguagesList()[i]}" value="${data.getLanguagesList()[i]}">${data.getLanguagesList()[i]}</option>
   
        `)
    }
}

function clearSelectRegion(element) {
    element.remove();
}

export {renderRegionSelect, clearSelectRegion, renderLanguageSelect}

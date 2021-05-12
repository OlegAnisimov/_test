function renderRegionSelect(element) {
    element.insertAdjacentHTML('afterbegin', `<select id="select_region" class="select_region select">
        <option id="Europe" value="Europe">Europe</option>
        <option id="North America" value="North America">North America</option>
        <option id="South America" value="South America">South America</option>
        <option id="Asia" value="Asia">Asia</option>
        <option id="Oceania" value="Oceania">Oceania</option>
</select>`)
}

export {renderRegionSelect}

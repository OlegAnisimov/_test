// CREATE TABLE
function createTable(element) {
    element.insertAdjacentHTML('beforeend', `<table id="regionList"><thead id="thead"><th id="th_name" class="th_clickSort">name</th> <th id="th_capital" class="th_clickSort">capital</th> <th id="th_area" class="th_clickSort">area</th> <th id="th_flagURL">flagURL</th> <th id="th_region">region</th></thead><tbody id="tbody"></tbody></table>`);

}

//RENDER
function renderTableCountries(region, data) {
    // element.insertAdjacentHTML('beforeend', `<table id="regionList"><thead id="thead"><tr><th id="th_name" class="th_clickSort">name</th> <th id="th_capital" class="th_clickSort">capital</th> <th id="th_area" class="th_clickSort">area</th> <th id="th_flagURL">flagURL</th> <th id="th_region">region</th></tr></thead></table>`);

    for (let i = 0; i < data.getCountryListByRegion(region).length; i++) {
        document.getElementById('tbody').insertAdjacentHTML('afterbegin', `<tr id=country-${i} >
 <td>${data.getCountryListByRegion(region)[i].name}</td>
 <td>${data.getCountryListByRegion(region)[i].capital}</td>
 <td>${data.getCountryListByRegion(region)[i].area}</td>
 <td>${data.getCountryListByRegion(region)[i].flagURL}</td>
 <td>${data.getCountryListByRegion(region)[i].region}</td>
 </tr>`)
    }
};

//CLEAR VALUE
function clearRegionList() {
    // let clearHTML = document.getElementById(`regionList`);
    let clearHTML = document.querySelector(`#tbody`);
    clearHTML.innerHTML = "";
}

export {renderTableCountries, clearRegionList, createTable};

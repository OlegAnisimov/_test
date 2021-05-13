function createTable(element) {
    element.insertAdjacentHTML('beforeend', `<table id="regionList"><thead id="thead"><th id="th_name" class="th_clickSort">name<span id="sortUpName">&uarr;</span> <span id="sortDownName">&darr;</span> </th> <th id="th_capital" class="th_clickSort">capital<span id="sortUpCapital">&uarr;</span> <span id="sortDownCapital">&darr;</span></th> <th id="th_area" class="th_clickSort">area<span id="sortUpArea">&uarr;</span><span id="sortDownArea">&darr;</span></th> <th id="th_flagURL">flagURL</th> <th id="th_region">region</th></thead><tbody id="tbody"></tbody></table>`);

}
function renderTableCountries(region, data) {
    data = data.getCountryListByRegion(region).sort((itemA, itemB) => itemA.name > itemB.name ? -1 : 1) ;
    // data = data.getCountryListByRegion(region).sort((itemA, itemB) => itemA.name > itemB.name ? 1 : -1) ;
    for (let i = 0; i < data.length; i++) {
        document.getElementById('tbody').insertAdjacentHTML('afterbegin', `<tr id=country-${i} >
 <td>${data[i].name}</td>
 <td>${data[i].capital}</td>
 <td>${data[i].area}</td>
 <td class="flag-cell"><img src="${data[i].flagURL}" alt="Flag ${data[i].name}"></td>
 <td>${data[i].region}</td>
 </tr>`)
    }
};

function clearRegionList() {
    let clearHTML = document.querySelector(`#tbody`);
    clearHTML.innerHTML = "";
}

export {renderTableCountries, clearRegionList, createTable};

// CREATE TABLE
// function createTable(element) {
//     console.log('createTable')
//     element.insertAdjacentHTML('beforeend', `<table id="regionList"><tr><th id="th_name" class="th_clickSort">name</th> <th id="th_capital" class="th_clickSort">capital</th> <th id="th_area" class="th_clickSort">area</th> <th id="th_flagURL">flagURL</th> <th id="th_region">region</th></tr></table>`);
//
// }
//RENDER
function renderTableCountries(region, element, data) {
    element.insertAdjacentHTML('beforeend', `<table id="regionList"><thead id="thead"><tr><th id="th_name" class="th_clickSort">name</th> <th id="th_capital" class="th_clickSort">capital</th> <th id="th_area" class="th_clickSort">area</th> <th id="th_flagURL">flagURL</th> <th id="th_region">region</th></tr></thead></table>`);

    for (let i = 0; i < data.getCountryListByRegion(region).length; i++) {
        document.getElementById('regionList').insertAdjacentHTML('beforeend', `<tr id=country-${i} >
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
    let clearHTML = document.getElementById(`regionList`);
    // element.forEach( (item, i) => console.log(item, i));


    clearHTML.remove();

}

export {renderTableCountries, clearRegionList};

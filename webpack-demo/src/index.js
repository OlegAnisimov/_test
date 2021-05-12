import './style.css';
import {HeaderComponent} from "./components/header/Header";
import {externalService} from "./components/main/external_sevices";
import {renderRegionSelect} from './components/main/select_region';
import './components/main/Main';
import {createTable, clearRegionList, renderTableCountries} from './components/main/countriesTableRender';
import {sortTableText, sortTableNumber} from './components/main/sortCountiesTable';

const app = document.getElementById('app');
HeaderComponent(app);
const header = document.getElementById('header');

// RENDER .main
header.insertAdjacentHTML('afterend', '<main id="main" class="main"></main>');
const main = document.getElementById('main');
renderRegionSelect(main);

//RENDER table country list
let selectRegion = document.querySelector('select option').textContent;
console.log(selectRegion)
// renderTableCountries(selectRegion, main, externalService);

//TESTS
// let td_nodeList = document.querySelectorAll('#regionList>tbody>tr>td');
// let tr_nodeList = document.querySelectorAll('#regionList>tbody>tr');
// console.log(document.querySelector('#regionList').childNodes[0].childNodes[0])
// console.log(document.querySelector('#regionList>tbody>tr>th'))


//TESTS
// let th_nodeList_selector = document.querySelectorAll("th");
// let th_nodeList_get = document.getElementsByTagName("th"); // HTML collection forEach doesnt work
// // const th_clickSort = document.querySelectorAll('#regionList>tbody>tr[id^=country-0]');
// const th_clickSort = document.querySelector('#regionList>tbody>tr[id^=country-0]').childNodes[5].innerHTML;

createTable(main)
const regionList = document.querySelector('#regionList');
renderTableCountries(selectRegion, externalService);


// ONLOAD
window.onload = () => {
    // Render table after change region
    let selectRegion = document.querySelector('#select_region');

    selectRegion.addEventListener('change', () => {
            clearRegionList();
            renderTableCountries(selectRegion.value, externalService);
        }
    )

    // Sort table
    document.querySelector('#regionList>thead>tr>#th_name').addEventListener('click', () => {
        sortTableText(0, regionList);
        console.log(document.querySelector('#regionList>tbody>tr>#th_name'));
    });
    document.querySelector('#regionList>thead>tr>#th_capital').addEventListener('click', () => sortTableText(1, regionList));
    document.querySelector('#regionList>thead>tr>#th_area').addEventListener('click', () => sortTableNumber(2, regionList));
    document.querySelector('#regionList>thead>tr>#th_name').addEventListener('click', () => (document.querySelector('#regionList>tbody>tr>#th_name').style = 'color:red'));


}


// let countryEurope = externalService.getCountryListByRegion("Europe");
// countryEurope.sort((a, b) => a.name.localeCompare(b.name));
// countryEurope.sort((a, b) => a.capital.localeCompare(b.capital));
// countryEurope.sort((a, b) => a.area - b.area); // asc
// countryEurope.sort((a, b) => b.area - a.area); // desc
// console.log(countryEurope);
// console.log(document.getElementById('regionList').value)


// console.log(externalService.getRegionsList());
// console.log(externalService.getLanguagesList());
// console.log(externalService.getCountryListByLanguage("Ukrainian"));


// function component() {
//     const element = document.createElement('div');
//
//     // Lodash, currently included via a script, is required for this line to work
//     // Lodash, now imported by this script
//
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//
//     // Add the image to our existing div.
//     const myIcon = new Image();
//     myIcon.src = Icon;
//     element.appendChild(myIcon);
//
//     console.log(Data);
//     console.log(Notes);
//
//     return element;
// }
//
// document.body.appendChild(component());


// (function renderRegionList(region ) {
//     for (let i = 0; i < regionList.length; i++) {
//         document.getElementById('regionList').insertAdjacentHTML('beforeend', `<tr id=country-${i}>
//  <td>${externalService.getCountryListByRegion(region)[i].name}</td>
//  <td>${externalService.getCountryListByRegion(region)[i].capital}</td>
//  <td>${externalService.getCountryListByRegion(region)[i].area}</td>
//  <td>${externalService.getCountryListByRegion(region)[i].flagURL}</td>
//  <td>${externalService.getCountryListByRegion(region)[i].region}</td>
//  </tr>`)
//     }
// }) ('Europe');


// for (let i = 0; i < regionList.length; i++) {
//  document.getElementById('regionList').insertAdjacentHTML('beforeend', `<tr id=country-${i}>
//  <td>${externalService.getCountryListByRegion("Europe")[i].name}</td>
//  <td>${externalService.getCountryListByRegion("Europe")[i].capital}</td>
//  <td>${externalService.getCountryListByRegion("Europe")[i].area}</td>
//  <td>${externalService.getCountryListByRegion("Europe")[i].flagURL}</td>
//  <td>${externalService.getCountryListByRegion("Europe")[i].region}</td>
//  </tr>`)

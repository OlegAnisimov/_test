import './style.css';
import {HeaderComponent} from "./components/header/Header";
import {externalService} from "./components/main/external_sevices";
import {renderRegionSelect} from './components/main/select_region';
import './components/main/Main';
import {createTable, clearRegionList, renderTableCountries} from './components/main/countriesTableRender';
import {
    sortAscTableText,
    sortDescTableText,
    sortAscTableNumber,
    sortDescTableNumber
} from './components/main/sortCountiesTable';

const app = document.getElementById('app');
HeaderComponent(app);
const header = document.getElementById('header');
// RENDER .main
header.insertAdjacentHTML('afterend', '<main id="main" class="main"></main>');
const main = document.getElementById('main');
renderRegionSelect(main);
//RENDER table countries list
let selectRegionFirstRender = document.querySelector('select option').textContent;
createTable(main)
const regionList = document.querySelector('#regionList');
renderTableCountries(selectRegionFirstRender, externalService);



window.onload = () => {
    let listenerSelectRegion = document.querySelector('#select_region');

    const id_sortUpName = document.querySelector('#sortUpName');
    const id_sortDownName = document.querySelector('#sortDownName');
    const id_sortUpCapital = document.querySelector('#sortUpCapital');
    const id_sortDownCapital = document.querySelector('#sortDownCapital');
    const id_sortDownArea = document.querySelector('#sortDownArea');
    const id_sortUpArea = document.querySelector('#sortUpArea');

    id_sortDownName.addEventListener('click', () => sortAscTableText(2, regionList));
    id_sortUpName.addEventListener('click', () => sortDescTableText(2, regionList));
    id_sortDownCapital.addEventListener('click', () => sortAscTableText(2, regionList));
    id_sortUpCapital.addEventListener('click', () => sortDescTableText(2, regionList));
    id_sortDownArea.addEventListener('click', () => sortAscTableNumber(2, regionList));
    id_sortUpArea.addEventListener('click', () => sortDescTableNumber(2, regionList));

    listenerSelectRegion.addEventListener('change', () => {
        clearRegionList();
        renderTableCountries(listenerSelectRegion.value, externalService);
    })
}





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




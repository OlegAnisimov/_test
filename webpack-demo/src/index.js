import './style.css';
import {HeaderComponent} from "./components/header/Header";
import {externalService} from "./components/main/external_sevices";
import {renderRegionSelect, clearSelectRegion, renderLanguageSelect} from './components/main/select_region';
import './components/main/Main';
import {
    createTable,
    removeTable,
    renderTableRegions,
    renderTableLanguages
} from './components/main/countriesTableRender';
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
header.insertAdjacentHTML('afterend', '<main id="main" class="main"><div id="startInfo" class="main__startInfo_visible">Please choose sth ...</div></main>');
const main = document.getElementById('main');


//!Important
function sortAddEventListener() {
    const id_sortUpName = document.querySelector('#sortUpName');
    const id_sortDownName = document.querySelector('#sortDownName');
    const id_sortUpCapital = document.querySelector('#sortUpCapital');
    const id_sortDownCapital = document.querySelector('#sortDownCapital');
    const id_sortDownArea = document.querySelector('#sortDownArea');
    const id_sortUpArea = document.querySelector('#sortUpArea');

    id_sortUpName.addEventListener('click', () => sortAscTableText(0, document.querySelector('table[id^=tableBy]')));
    id_sortDownName.addEventListener('click', () => sortDescTableText(0, document.querySelector('table[id^=tableBy]')));
    id_sortUpCapital.addEventListener('click', () => sortAscTableText(1, document.querySelector('table[id^=tableBy]')));
    id_sortDownCapital.addEventListener('click', () => sortDescTableText(1, document.querySelector('table[id^=tableBy]')));
    id_sortDownArea.addEventListener('click', () => sortAscTableNumber(2, document.querySelector('table[id^=tableBy]')));
    id_sortUpArea.addEventListener('click', () => sortDescTableNumber(2, document.querySelector('table[id^=tableBy]')));
}

window.onload = () => {
    const radioByRegion = document.querySelector('#radioByRegion');
    const radioByLanguage = document.querySelector('#radioByLanguage');

    radioByRegion.addEventListener('input', () => {
        renderRegionSelect(main, externalService);

        document.querySelector('#select_region').addEventListener('change', () => {
            removeTable(document.querySelectorAll(`#tableByRegion>tbody`));
            renderTableRegions(document.querySelector('#select_region').value, externalService);
        })
    });
    radioByRegion.addEventListener('change', () => clearSelectRegion(document.querySelector('#startInfo')))
    radioByRegion.addEventListener('change', () => clearSelectRegion(document.querySelector('#select_language')))
    radioByRegion.addEventListener('change', () => clearSelectRegion(document.querySelector('#tableByLanguage'))) // ?
    radioByRegion.addEventListener('change', () => {
        createTable(main, `table${radioByRegion.getAttribute('id').substr(5)}`);
        sortAddEventListener();
    })
    radioByRegion.addEventListener('change', () => renderTableRegions(document.querySelector('#select_region').value, externalService))


    radioByLanguage.addEventListener('input', () => {
        renderLanguageSelect(main, externalService)

        document.querySelector('select').addEventListener('change', () => {
            removeTable(document.querySelectorAll(`#tableByLanguage>tbody`));
            renderTableLanguages(document.querySelector('#select_language').value, externalService);
        })
    });

    radioByLanguage.addEventListener('change', () => clearSelectRegion(document.querySelector('#startInfo')))
    radioByLanguage.addEventListener('change', () => clearSelectRegion(document.querySelector('#select_region')))
    radioByLanguage.addEventListener('change', () => clearSelectRegion(document.querySelector('#tableByRegion'))) // ?
    radioByLanguage.addEventListener('change', () => {
        createTable(main, `table${radioByLanguage.getAttribute('id').substr(5)}`);
        sortAddEventListener();
    })
    radioByLanguage.addEventListener('change', () => renderTableLanguages(document.querySelector('#select_language').value, externalService));


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




import {renderTableCountries} from './countriesTableRender';

let element = document.getElementById('select_region');

element.addEventListener('change', renderTableCountries())

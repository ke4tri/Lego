import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import randomCow from './oneEach';

$('#random').click(() => {
  debugger;
  randomCow.bodyBuild();
});

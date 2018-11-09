import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import partsShit from './getParts';

const bodyBuild = () => {
  partsShit.legsGetter();
  partsShit.torsosGetter();
  partsShit.headGetter();
};

const nameBlankOut = () => {
  const string = '';
  $('#name').html(string);
};

$('#random').click(() => {
  nameBlankOut();
  bodyBuild();
});

// const saveTheFig = () => {
//   const savedName = document.getElementById('name');
//   $('#savedName').html(savedName.innerHTML);
// };

const saveTheFig = () => {
  const savedName = document.getElementById('name');
  const savedHead = document.getElementById('heads');
  const savedTorso = document.getElementById('torsos');
  const savedLegs = document.getElementById('legs');

  $('#savedName').html(savedName.innerHTML);
  $('#savedHead').html(savedHead.innerHTML);
  $('#savedTorso').html(savedTorso.innerHTML);
  $('#savedLegs').html(savedLegs.innerHTML);
};

$('#save').click(() => {
  saveTheFig();
});

export default { bodyBuild };

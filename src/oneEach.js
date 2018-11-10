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

const saveTheFig = () => {
  const savedName = document.getElementById('name');
  const savedHead = document.getElementById('heads');
  const savedTorso = document.getElementById('torsos');
  const savedLegs = document.getElementById('legs');

  $('#savedName').append(savedName.innerHTML);
  $('#savedHead').append(savedHead.innerHTML);
  $('#savedTorso').append(savedTorso.innerHTML);
  $('#savedLegs').append(savedLegs.innerHTML);
  console.log('check');
};

$('#save').click(() => {
  saveTheFig();
});

export default { bodyBuild };

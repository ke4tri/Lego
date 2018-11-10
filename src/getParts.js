import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import wayne from './data/partsData';

const createHead = (parts) => {
  let newString = '';
  let newString2 = '';
  const randomItem = parts[Math.floor(Math.random() * parts.length)];
  newString += `
      <img src="${randomItem.imageUrl}" height="175" width="175" >
      `;
  newString2 = `${randomItem.name}`.toUpperCase();
  $('#heads').html(newString);
  $('#name').append(newString2);
};

const createtorsos = (parts) => {
  let newString = '';
  let newString2 = '';
  const randomItem = parts[Math.floor(Math.random() * parts.length)];
  newString += `
      <img src="${randomItem.imageUrl}" alt="Torso" height="175" width="175" >
      `;
  newString2 = `${randomItem.name}`.toUpperCase();
  $('#torsos').html(newString);
  $('#name').append(newString2);
};

const createLegs = (parts) => {
  let newString = '';
  let newString2 = '';
  const randomItem = parts[Math.floor(Math.random() * parts.length)];
  newString += `
      <img src="${randomItem.imageUrl}" alt="Legs" class="saveBuild" height="175" width="175" >
      `;
  newString2 = `${randomItem.name}`.toUpperCase();
  $('#legs').html(newString);
  $('#name').append(newString2);
};

const headGetter = () => {
  wayne.getHeadParts()
    .then((data) => {
      createHead(data.data);
    })
    .catch((error) => {
      console.log({ error });
    });
};

const torsosGetter = () => {
  wayne.getTorsosParts()
    .then((data) => {
      createtorsos(data.data);
    })
    .catch((error) => {
      console.log({ error });
    });
};

const legsGetter = () => {
  wayne.getLegsParts()
    .then((data) => {
      createLegs(data.data);
    })
    .catch((error) => {
      console.log({ error });
    });
};


export default { headGetter, torsosGetter, legsGetter };

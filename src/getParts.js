import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import wayne from './data/partsData';

const createHead = (parts) => {
  let newString = '';
  let newString2 = '';
  const randomItem = parts[Math.floor(Math.random() * parts.length)];
  newString += `
      <div>
      <img src="${randomItem.imageUrl}" alt="Head" height="200" width="200">
      </div>`;
  newString2 = `${randomItem.name}`;
  $('#heads').html(newString);
  $('#name').append(newString2);
};

const createtorsos = (parts) => {
  let newString = '';
  let newString2 = '';
  const randomItem = parts[Math.floor(Math.random() * parts.length)];
  newString += `
      <div>
      <img src="${randomItem.imageUrl}" alt="Torso" height="200" width="200">
      </div>`;
  newString2 = `${randomItem.name}`;
  $('#torsos').html(newString);
  $('#name').append(newString2);
};

const createLegs = (parts) => {
  let newString = '';
  let newString2 = '';
  const randomItem = parts[Math.floor(Math.random() * parts.length)];
  newString += `
      <div>
      <img src="${randomItem.imageUrl}" alt="Legs" height="200" width="200">
      </div>`;
  newString2 = `${randomItem.name}`;
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

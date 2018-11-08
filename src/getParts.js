import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import wayne from './data/partsData';

const createHead = (parts) => {
  let newString = '';
  parts.forEach((part) => {
    newString += `
      <div>
      <img src="${part.imageUrl}" alt="Smiley face" height="200" width="200">
      </div>`;
  });
  $('#heads').html(newString);
};

const createtorsos = (parts) => {
  let newString = '';
  parts.forEach((part) => {
    newString += `
      <div>
      <img src="${part.imageUrl}" alt="Smiley face" height="200" width="200">
      </div>`;
  });
  $('#torsos').html(newString);
};

const createLegs = (parts) => {
  let newString = '';
  parts.forEach((part) => {
    newString += `
      <div>
      <img src="${part.imageUrl}" alt="Smiley face" height="200" width="200">
      </div>`;
  });
  $('#legs').html(newString);
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

import 'jquery';
import 'bootstrap';
import './index.scss';

import wayne from './data/partsData';

const createPartsCards = (parts) => {
  let newString = '';
  parts.forEach((part) => {
    newString += `
      <div class="card u-clearfix">
        <div class="card-body">
          <span class="card-number card-circle subtle">${part['add-on-price'].toFixed(0)}</span>
          <span class="card-author subtle"></span>
          <h2 class="card-title">${part.name}</h2>
          <span class="card-description subtle">${part.specialSkill}</span>
          <div class="card-read"><span class="subtle">Color</span>${part.color}</div>
        </div>
        <img src="${part.gif}" alt="" class="card-media" />
      </div>`;
  });
  $('#parts').html(newString);
};

const partsGetter = () => {
  wayne.getParts()
    .then((data) => {
      createPartsCards(data.data);
    })
    .catch((error) => {
      console.log({ error });
    });
};


export default { partsGetter };

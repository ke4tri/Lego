import 'jquery';
import 'bootstrap';
import './index.scss';
import partsShit from './getParts';

const initializeFuncs = () => {
  partsShit.headGetter();
  partsShit.torsosGetter();
  partsShit.legsGetter();
};

initializeFuncs();

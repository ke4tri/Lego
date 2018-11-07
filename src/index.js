import 'jquery';
import 'bootstrap';
import './index.scss';
import partsShit from './getParts';

const initializeFuncs = () => {
  partsShit.partsGetter();
};

initializeFuncs();

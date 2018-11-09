// import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import partsShit from './getParts';

const bodyBuild = () => {
  partsShit.legsGetter();
  partsShit.torsosGetter();
  partsShit.headGetter();
};

export default { bodyBuild };

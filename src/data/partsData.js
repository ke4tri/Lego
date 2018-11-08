import axios from 'axios';

const getHeadParts = () => axios.get('http://localhost:3002/heads');
const getTorsosParts = () => axios.get('http://localhost:3002/torsos');
const getLegsParts = () => axios.get('http://localhost:3002/legs');

export default { getHeadParts, getTorsosParts, getLegsParts };

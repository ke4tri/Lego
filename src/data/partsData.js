import axios from 'axios';

const getParts = () => axios.get('http://localhost:3002/heads');

export default { getParts };

import '../styles/main.scss';
import 'bootstrap';
// import msg from './helpers/data/messageData';

const moment = require('moment');

console.error('Test');
// console.error(msg.messages[0].timestamp);
console.error(moment());
console.error(Date.now());
console.error(moment().format('x'));
console.error(moment().format('YYYY'));
console.error(moment().format('MMMM D, YYYY h:mm A'));

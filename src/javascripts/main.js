import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';

const moment = require('moment');

console.error(moment().format('MMMM D, YYYY h:mm A'));

const init = () => {
  messages.displayMessages();
};

init();

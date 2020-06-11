import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';
import navbar from './navbar';
import userList from './components/userList';


const moment = require('moment');

console.error(moment().format('MMMM D, YYYY h:mm A'));

const init = () => {
  userList.createUserButtons();
  userList.addEventListeners();
  messages.displayMessages();
  navbar.makeNavbar();
};

init();

import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';
import navbar from './navbar';
import userList from './components/userList';
import clearHistory from './components/clearHistory';


const init = () => {
  userList.createUserButtons();
  userList.addEventListeners();
  messages.displayMessages();
  navbar.makeNavbar();
  clearHistory.createClearButton();
};

init();

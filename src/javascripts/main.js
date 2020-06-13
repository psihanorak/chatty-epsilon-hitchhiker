import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';
import navbar from './components/navbar';
import userList from './components/userList';
import addMessage from './components/addMessage';
import clearHistory from './components/clearHistory';

const init = () => {
  userList.createUserButtons();
  userList.addEventListeners();
  messages.displayMessages();
  navbar.makeNavbar();
  addMessage.textArea();
  addMessage.submit();
  addMessage.createNewMessage();
  clearHistory.createClearButton();
};

init();

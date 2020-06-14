import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';
import navbar from './components/navbar';
import userList from './components/userList';
import addMessage from './components/addMessage';
import clearHistory from './components/clearHistory';
import themes from './components/darkTheme';

const init = () => {
  userList.createUserButtons();
  userList.addEventListeners();
  messages.displayMessages();
  navbar.makeNavbar();
  addMessage.textArea();
  addMessage.submit();
  clearHistory.createClearButton();
  themes.createDarkThemeButton();
  themes.buttonListeners();
  $('#user-messages').animate({ scrollTop: $('#user-messages').prop('scrollHeight') }, 1000);
};

init();

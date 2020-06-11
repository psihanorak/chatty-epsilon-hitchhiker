import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';
import navbar from './navbar';
import addMessages from './components/addMessages';

const init = () => {
  messages.displayMessages();
  navbar.makeNavbar();
  addMessages.textArea();
};

init();

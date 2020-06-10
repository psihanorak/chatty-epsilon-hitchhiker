import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';
import navbar from './navbar';

const init = () => {
  messages.displayMessages();
  navbar.makeNavbar();
};

init();

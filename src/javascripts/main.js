import '../styles/main.scss';
import '../styles/messagesDiv.scss';
import 'bootstrap';
import messages from './components/messageUsers';

const init = () => {
  messages.displayMessages();
};

init();

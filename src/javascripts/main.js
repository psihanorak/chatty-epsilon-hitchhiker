import '../styles/main.scss';
import userList from './components/userList';
import 'bootstrap';
// import utils from './helpers/utils';

const init = () => {
  userList.createUserButtons();
  userList.addEventListeners();
  // utils.printToDom('#user-list', 'test');
};

init();

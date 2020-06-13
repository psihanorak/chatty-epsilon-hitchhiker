import utils from '../helpers/utils';
import messageData from '../helpers/data/messageData';
import messageUsers from './messageUsers';
// import userList from './userList';
import userData from '../helpers/data/userData';

const textArea = () => {
  let domString = '';

  domString += `<form id="form">
                <textarea id="text" name="textarea_field" placeholder="Type here..." rows="10" cols="80"></textarea>
                <button id="submit" type="button" class="btn btn-light">Submit</button>
                </form>`;
  utils.printToDom('#compose-area', domString);
};

const createNewMessage = () => {
  const currentUser = userData.getCurrentUser();
  const message = document.getElementById('text').value;
  // const user = userList.addEventListeners();
  const newMessage = {
    timestamp: Date.now(),
    sender: currentUser,
    text: message,
  };
  messageData.getMessages().push(newMessage);
  messageUsers.displayMessages();
  document.getElementById('text').value = '';
};

const addMessage = () => {
  createNewMessage();
};

const submit = () => {
  document.getElementById('submit').addEventListener('click', addMessage);
};

export default { textArea, submit, createNewMessage };

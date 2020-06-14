import utils from '../helpers/utils';
import messageData from '../helpers/data/messageData';
import messageUsers from './messageUsers';
// import userList from './userList';

const textArea = () => {
  let domString = '';

  domString += `<form id="form">
                <label for="text"></label>
                <textarea id="text" name="textarea_field" placeholder="Type here..."></textarea>
                <button id="submit" type="button" class="btn btn-light">Submit</button>
                </form>`;
  utils.printToDom('#text-area', domString);
};

const createNewMessage = () => {
  const message = document.getElementById('text').value;
  // const user = userList.addEventListeners();
  const newMessage = {
    timestamp: Date.now(),
    sender: '',
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

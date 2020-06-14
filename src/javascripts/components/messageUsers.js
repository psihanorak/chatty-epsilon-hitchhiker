import moment from 'moment';
import data from '../helpers/data/messageData';
import utils from '../helpers/utils';
import userData from '../helpers/data/userData';

const displayMessages = () => {
  const messages = data.getMessages();
  if (messages.length > 20) {
    messages.splice(0, (messages.length - 20));
  }
  const users = userData.getUsers();
  const userId = userData.getCurrentUser();
  let domString = '';
  messages.forEach((message) => {
    if (message.timestamp > users[userId].trashBefore) {
      domString += `<div class="card" style="width: 70%;">
                    <div class="card-body">
                    <h6>${users[message.sender].name}</h6>
                      <p>${message.text}</p>
                      <h6 class="card-name card-subtitle text-muted">${moment(message.timestamp).format('MMMM D, YYYY h:mm A')}</h6>
                    </div >
                  </div > `;
    }
  });
  utils.printToDom('#user-messages', domString);
};

export default { displayMessages };

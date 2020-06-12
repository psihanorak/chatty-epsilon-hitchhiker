import moment from 'moment';
import data from '../helpers/data/messageData';
import utils from '../helpers/utils';
import userData from '../helpers/data/userData';

const displayMessages = () => {
  const messages = data.getMessages();
  const users = userData.getUsers();
  const userId = userData.getCurrentUser();
  let domString = '';
  messages.forEach((message) => {
    if (message.timestamp > users[userId].trashBefore) {
      domString += `<div class="card" style="width: 18rem;">
                    <h2>${message.sender}</h2>
                    <div class="card-body">
                      <p>${message.text}</p>
                      <h5 class="card-name">${moment(message.timestamp).format('MMMM D, YYYY h:mm A')}</h5>
                    </div >
                  </div > `;
    }
  });
  utils.printToDom('#user-messages', domString);
};

export default { displayMessages };

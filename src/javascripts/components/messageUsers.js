import moment from 'moment';
import utils from '../helpers/utils';
import data from '../helpers/data/messageData';
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
    const id = `${message.sender}-${message.timestamp}`;
    if (message.timestamp > users[userId].trashBefore) {
      domString += `
      <div class="card" style="width: 70%;">
        <div class="card-body">
          <h6>${users[message.sender].name}</h6>
          <p>${message.text}</p>
          <span class="card-name card-subtitle text-muted">
          ${moment(message.timestamp).format('MMMM D, YYYY h:mm A')}`;

      if (message.likes > 0) {
        domString += `
        <i class="far fa-thumbs-up"></i>${message.likes} `;
      }
      if (message.dislikes > 0) {
        domString += `
        <i class="far fa-thumbs-down"></i>${message.dislikes}`;
      }
      domString += '</span>';

      if (userId === message.sender) {
        domString += `<i class="fas fa-2x fa-trash-alt text-danger d-flex justify-content-end delete-message-button" id="${id}"></i>`;
      } else {
        domString += `<span class="like-buttons d-flex justify-content-end">
                        <i class="far fa-thumbs-up like-button" id="like-${id}"></i> 
                        <i class="far fa-thumbs-down ml-1 dislike-button" id="disl-${id}"></i>
                      </span>`;
      }

      domString += `
        </div>
      </div>
      `;
    }
  });
  utils.printToDom('#user-messages', domString);
};

export default { displayMessages };

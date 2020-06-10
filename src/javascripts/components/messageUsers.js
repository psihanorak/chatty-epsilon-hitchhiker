import data from '../helpers/data/messageData';
import utils from '../helpers/utils';

const displayMessages = () => {
  const messages = data.getMessages();
  let domString = '';

  messages.forEach((message) => {
    domString += `<div class="card" style="width: 18rem;">
                    <h2>${message.sender}</h2>
                    <div class="card-body">
                      <p>${message.text}</p>
                      <h5 class="card-name">${message.timestamp}</h5>
                    </div>
                  </div>`;
  });
  utils.printToDom('#user-messages', domString);
};

export default { displayMessages };

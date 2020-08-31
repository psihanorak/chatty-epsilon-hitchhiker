import data from '../helpers/data/messageData';

import messages from './messageUsers';

const deleteMessageListeners = () => {
  document.querySelector('#user-messages').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-message-button')) {
      const msgID = $(event.target).attr('id');
      data.deleteMessage(msgID);
      messages.displayMessages();
    }
  });
};

export default { deleteMessageListeners };

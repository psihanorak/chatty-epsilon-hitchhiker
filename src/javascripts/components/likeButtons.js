import data from '../helpers/data/messageData';
import messages from './messageUsers';

const likeButtonListeners = () => {
  document.querySelector('#user-messages').addEventListener('click', (event) => {
    if (event.target.classList.contains('like-button')) {
      const msgID = $(event.target).attr('id');
      data.likeMessage(msgID, true);
      messages.displayMessages();
    }
    if (event.target.classList.contains('dislike-button')) {
      const msgID = $(event.target).attr('id');
      data.likeMessage(msgID, false);
      messages.displayMessages();
    }
  });
};

export default { likeButtonListeners };

import userData from './userData';

const messages = [{
  timestamp: 1591738209835,
  sender: 1,
  text: 'This is the first message for Chatty Epsilon Hitchhiker!  Welcome and thanks for all the fish!',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591738209999,
  sender: 2,
  text: 'Glad to be here!',
  likes: 2,
  dislikes: 0,
},
{
  timestamp: 1591738231234,
  sender: 1,
  text: "Hey!  It's the third message!",
  likes: 8,
  dislikes: 0,
},
{
  timestamp: 1591749465105,
  sender: 3,
  text: 'This is so cool!  Whichever team coded this is really the best!',
  likes: 0,
  dislikes: 1,
},
{
  timestamp: 1591749508601,
  sender: 4,
  text: "Well, if you haven't heard of team Epsilon, hitchhiker, you definitely haven't read the guide!",
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508606,
  sender: 0,
  text: "Hey, what's up guys?",
  likes: 2,
  dislikes: 0,
},
{
  timestamp: 1591749508616,
  sender: 4,
  text: 'Oh, hi Xavier. Just talking about how amazing this chatty app is!',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508633,
  sender: 0,
  text: 'Chatting about a chat app? How meta of you.',
  likes: 8,
  dislikes: 0,
},
{
  timestamp: 1591749508677,
  sender: 3,
  text: 'Lolz',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508711,
  sender: 2,
  text: "I'm getting hungry for fish",
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508801,
  sender: 0,
  text: 'Is anyone else into Phish?',
  likes: 0,
  dislikes: 4,
},
{
  timestamp: 1591749508822,
  sender: 1,
  text: 'no',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508855,
  sender: 2,
  text: 'no',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508877,
  sender: 3,
  text: 'Nope.',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508901,
  sender: 4,
  text: 'definitely not',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508912,
  sender: 1,
  text: 'Well. Ok then.',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508915,
  sender: 3,
  text: 'I love fish sticks',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508933,
  sender: 4,
  text: 'Ohhh, fish and chips are my favorite!',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508956,
  sender: 2,
  text: "Did you know we've almost written 20 messages??",
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508966,
  sender: 4,
  text: 'Hey I just wrote the twentieth message!!',
  likes: 12,
  dislikes: 0,
},
{
  timestamp: 1591749508977,
  sender: 1,
  text: 'No way! I feel like I just logged on!',
  likes: 0,
  dislikes: 0,
},
{
  timestamp: 1591749508601,
  sender: 4,
  text: 'Time really flies on this app',
  likes: 2,
  dislikes: 1,
},
];

const getMessages = () => messages;

const deleteMessage = (msgID) => {
  const msgSender = parseInt(msgID.split('-')[0], 10);
  const msgTimestamp = parseInt(msgID.split('-')[1], 10);

  messages.forEach((message) => {
    if (message.sender === msgSender) {
      if (message.timestamp === msgTimestamp) {
        messages.splice(messages.indexOf(message), 1);
      }
    }
  });
};

const changeLikeTally = (msgID, likeAdd, dislikeAdd) => {
  const msgSender = parseInt(msgID.split('-')[0], 10);
  const msgTimestamp = parseInt(msgID.split('-')[1], 10);
  messages.forEach((message, index) => {
    if (message.sender === msgSender) {
      if (message.timestamp === msgTimestamp) {
        messages[index].likes += likeAdd;
        messages[index].dislikes += dislikeAdd;
      }
    }
  });
};

const likeMessage = (buttonID, like) => {
  const msgID = buttonID.substring(5);
  const userInfo = userData.getCurrentUserInfo();
  if (like) {
    if (!userInfo.likes.includes(msgID)) {
      changeLikeTally(msgID, 1, 0);
      userData.addLike(msgID);
      if (userInfo.dislikes.includes(msgID)) {
        userInfo.dislikes = userInfo.dislikes.filter((disliked) => disliked !== msgID);
        changeLikeTally(msgID, 0, -1);
      }
    }
  } else if (!userInfo.dislikes.includes(msgID)) {
    changeLikeTally(msgID, 0, 1);
    userData.addDisike(msgID);
    if (userInfo.likes.includes(msgID)) {
      userInfo.likes = userInfo.likes.filter((liked) => liked !== msgID);
      changeLikeTally(msgID, -1, 0);
    }
  }
};

export default {
  getMessages,
  deleteMessage,
  likeMessage,
};

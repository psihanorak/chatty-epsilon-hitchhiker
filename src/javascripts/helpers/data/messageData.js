const messages = [{
  timestamp: 1591738209835,
  sender: 1,
  text: 'This is the first message for Chatty Epsilon Hitchhiker!  Welcome and thanks for all the fish!',
},
{
  timestamp: 1591738209999,
  sender: 2,
  text: 'Glad to be here!',
},
{
  timestamp: 1591738231234,
  sender: 1,
  text: "Hey!  It's the third message!",
},
{
  timestamp: 1591749465105,
  sender: 3,
  text: 'This is so cool!  Whichever team coded this is really the best!',
},
{
  timestamp: 1591749508601,
  sender: 4,
  text: "Well, if you haven't heard of team Epsilon, hitchhiker, you definitely haven't read the guide!",
},
{
  timestamp: 1591749508606,
  sender: 0,
  text: "Hey, what's up guys?",
},
{
  timestamp: 1591749508616,
  sender: 4,
  text: 'Oh, hi Xavier. Just talking about how amazing this chatty app is!',
},
{
  timestamp: 1591749508633,
  sender: 0,
  text: 'Chatting about a chat app? How meta of you.',
},
{
  timestamp: 1591749508677,
  sender: 3,
  text: 'Lolz',
},
{
  timestamp: 1591749508711,
  sender: 2,
  text: "I'm getting hungry for fish",
},
{
  timestamp: 1591749508801,
  sender: 0,
  text: 'Is anyone else into Phish?',
},
{
  timestamp: 1591749508822,
  sender: 1,
  text: 'no',
},
{
  timestamp: 1591749508855,
  sender: 2,
  text: 'no',
},
{
  timestamp: 1591749508877,
  sender: 3,
  text: 'Nope.',
},
{
  timestamp: 1591749508901,
  sender: 4,
  text: 'definitely not',
},
{
  timestamp: 1591749508912,
  sender: 1,
  text: 'Well. Ok then.',
},
{
  timestamp: 1591749508915,
  sender: 3,
  text: 'I love fish sticks',
},
{
  timestamp: 1591749508933,
  sender: 4,
  text: 'Ohhh, fish and chips are my favorite!',
},
{
  timestamp: 1591749508956,
  sender: 2,
  text: "Did you know we've almost written 20 messages??",
},
{
  timestamp: 1591749508966,
  sender: 4,
  text: 'Hey I just wrote the twentieth message!!',
},
{
  timestamp: 1591749508977,
  sender: 1,
  text: 'No way! I feel like I just logged on!',
},
{
  timestamp: 1591749508601,
  sender: 4,
  text: 'Time really flies on this app',
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

export default {
  getMessages,
  deleteMessage,
};

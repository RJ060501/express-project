// handles different ways that all the different OS handles paths
const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });
  //__dirname gets name of folder where current file lives
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'BingImageOfTheDay.jpg'));
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};
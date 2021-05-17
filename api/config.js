const path = require('path');
const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public/uploads'),
  db: {
    url: 'mongodb://localhost/shop',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  facebook: {
    appId: '516440226159473',
    appSecret: '1b8e9090a97ea0b3a8013852a75ff68d',
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
};

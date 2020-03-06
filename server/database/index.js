const mongoose = require('mongoose');

const db_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;

const createConnection = () => {
  mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.once('open', () => {
    console.log('[database]: Connected to MongoDB Atlas Cluster');
  });
};

module.exports = createConnection;

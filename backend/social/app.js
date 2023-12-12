const express = require('express');

const { initProducer } = require('./utilities/producer');
const userRouter = require('./routes/user.routes');
const tenantRouter = require('./routes/tenant.routes');
const logger = require('./logger/winston.logger');
let server;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(userRouter);
app.use('/user', userRouter);
app.use('/tenant', tenantRouter);

app.use((err, req, res) => {
  // Log the error using the logger
  logger.error(err);

  // Handle the error
  res.status(500).json({ error: 'Internal Server Error' });
});
app.use('/', async (req, res) => {
  res.status(200).json({
    message: `App is running on portsadasdasdas. ${process.env.PORT || 4000}`,
  });
});

server = app.listen(process.env.PORT || 4000, async () => {
  console.log('App started at port', process.env.PORT || 3000);
  await initProducer();
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

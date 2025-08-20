const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);          // middleware for logging
app.use('/users', usersRouter); // all /users routes

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

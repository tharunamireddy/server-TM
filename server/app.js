const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/tasks', tasks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

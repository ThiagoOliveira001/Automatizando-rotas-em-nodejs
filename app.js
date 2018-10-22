const app = require('express')();

require('./api/routes/set')(app);


app.listen(3000, () => {
    console.log('SERVER RUNNING IN PORT 3000');
});
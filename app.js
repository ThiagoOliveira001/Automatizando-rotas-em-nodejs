const app = require('express')();
let Router = require('./router/index');
const config = {
    src_path: `${__dirname}/src`,
    handle: true,
    show: true  
};
Router = new Router(config);
Router.route(app);

// require('./api/routes/set')(app, `${__dirname}/src`);



app.listen(3000, () => {
    console.log('SERVER RUNNING IN PORT 3000');
});
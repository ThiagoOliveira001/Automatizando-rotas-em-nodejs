const ctrl = require('./crudController');
const md1 = require('../../../api/middlewares/md1');
const md2 = require('../../../api/middlewares/md2');

const routes = [
    {
        url: '/crud',
        routes: [
            { method: 'get', controller: ctrl.find, middleware: [md1,md2] },
            { method: 'post', controller: ctrl.create }
        ]
    },
    {
        url: '/crud/:id',
        routes: [
            { method: 'put', controller: ctrl.update },
            { method: 'get', controller: ctrl.findOne },
            { method: 'delete', controller: ctrl.remove }
        ]
    }
];

module.exports = routes;
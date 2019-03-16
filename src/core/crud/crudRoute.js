const ctrl = require('./crudController');
const md1 = require('../../../api/middlewares/md1');
const md2 = require('../../../api/middlewares/md2');

const routes = [
    {
        url: '/crud',
        routes: [
            { method: 'get', ctrl: ctrl.find, middleware: [md1,md2] },
            { method: 'post', ctrl: ctrl.create }
        ]
    },
    {
        url: '/crud/:id',
        routes: [
            { method: 'put', ctrl: ctrl.update },
            { method: 'get', ctrl: ctrl.findOne },
            { method: 'delete', ctrl: ctrl.remove }
        ]
    }
];

module.exports = routes;
const ctrl = require('./testeController');

const routes = [
    {
        url: '/teste',
        routes: [
            { method: 'get', controller: ctrl.find }, 
            { method: 'post', controller: ctrl.create }
        ]
    },
    {
        url: '/teste/:id',
        routes: [
            { method: 'put', controller: ctrl.update },
            { method: 'get', controller: ctrl.findOne },
            { method: 'delete', controller: ctrl.remove }
        ]
    }
];

module.exports = routes;
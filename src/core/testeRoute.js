const ctrl = require('./testeController');

const routes = [
    {
        url: '/teste',
        routes: [
            { method: 'get', ctrl: ctrl.find }, 
            { method: 'post', ctrl: ctrl.create }
        ]
    },
    { 
        url: '/teste/:id',
        routes: [
            { method: 'put', ctrl: ctrl.update },
            { method: 'get', ctrl: ctrl.findOne },  
            { method: 'delete', ctrl: ctrl.remove }
        ]
    }
];

module.exports = routes;
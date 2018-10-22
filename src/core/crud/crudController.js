function find(req, res, next) { 
    res.send('list');
}  
function findOne (req, res, next) {
    res.send('get');
}
function create(req, res, next) {
    res.send('create');
}
function update(req, res, next) {
    res.send('update');
}
function remove(req, res, next) {
    res.send('remove');
}

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
};
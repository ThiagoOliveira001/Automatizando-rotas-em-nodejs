function find(req, res, next) { 
    res.ok('list');
}  
function findOne (req, res, next) {
    res.ok('get');
}
function create(req, res, next) {
    res.ok('create');
}
function update(req, res, next) {
    res.ok('update');
}
function remove(req, res, next) {
    res.ok('remove');
}

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
};
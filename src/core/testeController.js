function find(req, res, next) { 
    res.ok('list teste');
}  
function findOne (req, res, next) {
    res.ok('get teste');
}
function create(req, res, next) {
    res.ok('create teste');
}
function update(req, res, next) {
    res.ok('update teste');
}
function remove(req, res, next) {
    res.ok('remove teste');
}

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
};
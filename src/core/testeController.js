function find(req, res, next) { 
    res.send('list teste');
}  
function findOne (req, res, next) {
    res.send('get teste');
}
function create(req, res, next) {
    res.send('create teste');
}
function update(req, res, next) {
    res.send('update teste');
}
function remove(req, res, next) {
    res.send('remove teste');
}

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
};
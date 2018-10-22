module.exports = (req, res, next) => {
    console.log('Middleware1');
    next();
}

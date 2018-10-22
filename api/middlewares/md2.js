module.exports = (req, res, next) => {
    console.log('Middleware2');
    next();
}
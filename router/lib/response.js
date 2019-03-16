module.exports = (req, res, next) => {
    res.ok = (content, statusCode) => {
        statusCode = statusCode || 200;
        return res.status(statusCode).json({content,statusCode});
    };

    res.error = (content, statusCode) => {
        statusCode = statusCode || 500
        return res.status(statusCode).json({content,statusCode});
    };

    next();
}
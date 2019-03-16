class Router {
    constructor(config) {
        this._config = config;
        this._resolve = require('path').resolve;
        this._fs = require('fs');
        this._files = [];
        this._response = require('./lib/response');
    }

    route(app) {
        this._readDir(this._config.src_path);
        this._files = this._files.filter(x => /Route.js$/.test(x));

        this._files.map(path => {
            this._setRoutes(path, app);
        });
    }

    _readDir(path) {
        path = this._resolve(path);

        let dir = this._fs.readdirSync(path);
        // for (var i = 0; i < dir.length; i++) {
        //     if (fs.statSync(`${path}/${dir[i]}`).isDirectory()) {
        //         readDir(`${path}/${dir[i]}`, files);
        //         continue;
        //     }
        //     files.push(`${path}/${dir[i]}`);
        // }
        dir.forEach(x => {
            let fullPath = `${path}/${x}`;
            if (this._fs.statSync(fullPath).isDirectory()) {
                this._readDir(fullPath);
                return;
            }
            this._files.push(fullPath);
        });
    }

    _setRoutes(path, app) {
        let file = require(path);
        file.map(x => {
            x.routes.map(y => {
                if (this._config.auth) {
                    y.middleware
                        ? app[y.method](x.url, this._response, this._config.auth(y.public), ...y.middleware, this._config.handle ? this._handle(y.ctrl) : y.ctrl)
                        : app[y.method](x.url, this._response, this._config.auth(y.public), this._config.handle ? this._handle(y.ctrl) : y.ctrl);
                } else {
                    y.middleware
                        ? app[y.method](x.url, this._response, ...y.middleware, this._config.handle ? this._handle(y.ctrl, y.public) : y.ctrl)
                        : app[y.method](x.url, this._response, this._config.handle ? this._handle(y.ctrl, y.public) : y.ctrl);
                }
                if (this._config.show)
                    console.log(`Route: ${x.url}\nRequest Method: ${y.method}\n${this._config.handle ? `public: ${!!y.public}\n` : ''}Controller: ${y.ctrl.name}\n`);
            });
        });
    }

    _handle(controller) {
        return async (req, res, next) => {
            try {
                await controller(req, res, next);
            } catch (error) {
                res.error(error.content || this._config.errorResponse, error.statusCode);
            }
        }
    }
}

module.exports = Router;
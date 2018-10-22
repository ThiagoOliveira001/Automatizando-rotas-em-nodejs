//Pegando o caminho da pasta src do projeto
const SRC_PATH = __dirname + '../../../src';
const fs = require('fs');
const resolve = require('path').resolve;

function readDir(path, files = []) {
    //Pegando caminho absoluto do arquivo
    path = resolve(path);
    //Lendo diretório
    let dir = fs.readdirSync(path);
    for (var i = 0; i < dir.length; i++) {
        //Se for um diretório a função é chamada novamente 
        if (fs.statSync(`${path}/${dir[i]}`).isDirectory()) {
            readDir(`${path}/${dir[i]}`, files);
            continue;
        }
        //Criando array com todos os caminhos de arquivo do src
        files.push(`${path}/${dir[i]}`);
    }

    return files;
}

module.exports = async (app) => {
    let files = await readDir(SRC_PATH);
    //Pegando os arquivos com Route.js no nome
    files = files.filter(fl => fl.match(/Route.js$/));

    //Setando as rotas
    files.map((fl) => {
        let routes = require(fl);
        routes.map(route => {
            route.routes.forEach((x) => {
                x.middleware ? app[x.method](route.url, ...x.middleware, x.controller)
                    : app[x.method](route.url, x.controller);
            });
        });
    });
}
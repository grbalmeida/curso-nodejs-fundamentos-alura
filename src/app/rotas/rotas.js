const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send(`
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <a href="http://localhost:3000">Home</a>
                                </li>
                                <li>
                                    <a href="http://localhost:3000/livros">Livros</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <h1>Casa do Código</h1>
                </body>
            </html>
        `);
    });
    
    app.get('/livros', function(req, resp) {
        const livroDao = new LivroDao(db);
        livroDao.lista(function(erro, resultados) {
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }
            );
        });
    });
};
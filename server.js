const app = require('./src/config/custom-express');

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
                <h1>Listagem de livros</h1>
            </body>
        </html>
    `);
});

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});
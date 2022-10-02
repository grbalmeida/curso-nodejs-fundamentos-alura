const http = require('http');

const servidor = http.createServer(function (req, resp) {
    let html = '';

    if (req.url == '/') {
        html = `
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
        `;
    } else if (req.url == '/livros') {
        html = `
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
        `;
    }

    resp.end(html);
});
servidor.listen(3000);
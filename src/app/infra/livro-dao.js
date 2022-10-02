class LivroDao {
    constructor(db) {
        this._db = db;
    }

    lista(callback) {
        this._db.all('SELECT * FROM livros', (erro, resultados) => callback(erro, resultados));
    }
}

module.exports = LivroDao;
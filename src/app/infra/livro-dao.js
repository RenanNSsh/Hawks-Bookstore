class LivroDao{
    
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve,reject)=>{
            this._db.all(
                'SELECT * FROM livros',
                (erro,resultados) => {
                    if (erro)
                        return reject('Não foi possível listar os livros');
                    return resolve(resultados);                    
                }
            );
        })
    }

    adiciona(livro){
        return new Promise((resolve,reject)=>{
            this._db.run(`
            INSERT INTO livros (
                titulo,
                url,
                descricao
            ) values (?,?,?)
            `,[
                livro.titulo,
                livro.url,
                livro.descricao
            ],
            erro => {
                if(erro) {
                    console.log(erro);                    
                    return reject('Não foi possível adicionar o livro')
                }
                resolve();
            }
            )
        });
    }
}

module.exports = LivroDao;
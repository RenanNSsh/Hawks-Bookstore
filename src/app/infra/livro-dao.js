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
                return resolve();
            }
            )
        });
    }

    remove(id){
        console.log("teste")
        return new Promise((resolve,reject)=>{
            
            this._db.run(
            `
                DELETE FROM livros WHERE id = ?
            `,
            [
                id
            ],
            erro => {
                if(erro) {
                    console.log(erro)
                    return reject('Não foi possível remover o livro')
                }
                return resolve();
            })
        } )
    }

    atualiza(livro){
        return new Promise((resolve,reject)=>{
            this._db.run(
                `
                    UPDATE livros SET
                    titulo = ?,
                    url = ?,
                    descricao = ?
                    WHERE id = ?
                `,
                [
                    livro.titulo,
                    livro.url,
                    livro.descricao,
                    livro.id
                ],
                (erro)=>{
                    if(erro){
                        console.log(erro);
                        return reject("Não foi possivel atualizar o livro")
                    }
                    return resolve();
                }
                )
        })
    }

    buscaPorId(id){
        return new Promise((resolve,reject)=>{
            this._db.get(`
                SELECT * FROM livros WHERE id = ?
            `,
            [id],
            (erro,livro)=>{
                if(erro){
                    console.log(erro);
                    return reject('Não foi possível buscar o livro')
                }
                return resolve(livro);
            })
        })
    }
}

module.exports = LivroDao;
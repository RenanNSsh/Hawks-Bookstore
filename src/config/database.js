const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_completo VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = `
INSERT INTO usuarios (
    nome_completo,
    email,
    senha
) SELECT 'Renan Sanches', 'renan.sanches_123@hotmail.com', 'senha123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'renan.sanches_123@hotmail.com')
`;

const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS livros(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT DEFAULT ('') NOT NULL,
    url TEXT NOT NULL
)
`;

const INSERIR_LIVROS_1 = `
INSERT INTO livros(
    titulo,
    descricao,
    url
) SELECT 'Node na prática', 'Maneira eficiente e dinâmica de se aprender Node.js', '' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'Node na prática')
`;

const INSERIR_LIVROS_2 = `
INSERT INTO livros(
    titulo,
    descricao,
    url
) SELECT 'Boas práticas com Javascript', 'Boas práticas na hora de utilizar a orientação a objetos em javascript', '' WHERE NOT EXISTS (SELECT * FROM livros WHERE titulo = 'Boas práticas com Javascript')
`;

bd.serialize(()=>{
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(LIVROS_SCHEMA);
    bd.run(INSERIR_LIVROS_1);
    bd.run(INSERIR_LIVROS_2);

    bd.each("SELECT * FROM usuarios", (err,usuario)=>{
        console.log(`Usuario:`);
        console.log(usuario);
        
    });
});

process.on('SIGINT',() =>
    bd.close(()=>{
        console.log("banco encerrado");    
        process.exit(0);    
    })
)

module.exports = bd;
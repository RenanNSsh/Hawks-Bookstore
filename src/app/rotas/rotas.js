const LivroDao = require('../infra/livro-dao');

const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function (req,resp){
        resp.send(`
            <html>
                <head>
                    <title>Hawks Library</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Hawks Library</h1>
                    <h2>Sua livraria favorita</h2>
                </body>
            </html>
        `);
    })
    
    app.get('/livros', function(req,resp){
        
        const livroDao = new LivroDao(db);
        livroDao.lista()
                .then(livros =>  
                    resp.marko(require('../views/livros/lista/lista.marko'),
                    {
                        livros
                    }))
                .catch(erro => console.log(erro));
    })

    app.get('/livros/cadastrar',function(req,resp){
        resp.marko(require('../views/livros/form/form'));
    })

    app.post('/livros',function(req,resp){
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    })
};


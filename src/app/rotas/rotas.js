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
        resp.send(`
            <html>
                <head>
                    <title>Hawks Library</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Página de livros</h1>
                </body>
            </html>
    `)
    })
};


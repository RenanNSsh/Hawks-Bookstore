const http = require("http");

const servidor = http.createServer(function(req,resp){
    let pagina = "";
    if(req.url == '/'){
        pagina = `
            <html>
                <head>
                    <title>Hawks Library</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Hawks Library</h1>
                </body>
            </html>
        `;
    }else if (req.url == "/livros"){
        pagina =  `
        <html>
            <head>
                <title>Hawks Livros</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Listagem de Livros</h1>
            </body>
        </html>
    `;
    }


    resp.end(pagina); 
});

servidor.listen(3000)
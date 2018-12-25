const app = require('./src/config/custom-express');

app.listen(3000, function() {
    console.log(`Servidor rodando na porta 3000`);
})


// const http = require("http");


// const servidor = express.createServer(function(req,resp){
//     let pagina = "";
//     if(req.url == '/'){
//     }else if (req.url == "/livros"){
//         pagina =  `
//         <html>
//             <head>
//                 <title>Hawks Livros</title>
//                 <meta charset="utf-8">
//             </head>
//             <body>
//                 <h1>Listagem de Livros</h1>
//             </body>
//         </html>
//     `;
//     }


//     resp.end(pagina); 
// });

// servidor.listen(3000)
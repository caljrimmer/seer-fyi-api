import http from 'http';
import express from 'express';
import swaggerize from 'swaggerize-express';
import swaggerUi from 'swaggerize-ui';
import SwaggerParse from 'swagger-parser';
import bodyParser from 'body-parser'; 

const app = express();
app.use(bodyParser.json());
const server = http.createServer(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
* Validates our Swagger JSON for granular debugging
*/
if(process.env.NODE_ENV === 'development'){
    SwaggerParse.validate('./src/api/api.json')
        .then(function(api) {
            console.log("Swagger API name: %s, Version: %s", api.info.title, api.info.version);    
        })
        .catch(function(err) {
            console.log(err)
        });
}

app.use('/ui', swaggerUi({
  docs: '/api/api-docs' // from the express route above. 
}));

app.use(swaggerize({
    api: require('./api/api.json'),
    docspath: '/api-docs',
    handlers: './handlers'
}));

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send({
        message: err.message,
        error: err
    });
});

server.listen(14001, 'localhost', () => {
    app.swagger.api.host = server.address().address + ':' + server.address().port;
    console.log('listening at : ' + app.swagger.api.host);
});
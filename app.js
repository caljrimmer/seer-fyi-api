import http from 'http';
import express from 'express';
import swaggerize from 'swaggerize-express';
import bodyParser from 'body-parser'; 

const app = express();
app.use(bodyParser.json());
const server = http.createServer(app);

app.use(swaggerize({
    api: require('./api/api.json'),
    docspath: '/docs',
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
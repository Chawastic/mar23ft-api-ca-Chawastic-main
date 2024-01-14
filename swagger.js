const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "API CA",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    securityDefinitions: {
        Bearer: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Enter your bearer token in the format **Bearer <token>**"
        }
    },
    security: [{
        Bearer: []
    }],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./bin/www')
});

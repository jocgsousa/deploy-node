"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

const routes = new (0, _express.Router)();

routes.get('/', (request, response) =>{
    return response.json({messege:'Hello Teste...'})
});

exports. default = routes;
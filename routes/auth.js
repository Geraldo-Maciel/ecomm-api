const jwt = require ("express-jwt");
const secret = require("../config"). secret;

function getTokenFromHeader(req) {
    if(!req.headers.authorization) return null;
//    console.log('gettokenfromheader: ', req.headers.authorization)
    const token = req.headers.authorization.split(" ");
//    console.log('gettokenfromheader-token: ', token)
    if(token[0] !== "Ecommerce") return null;
    return token[1];
}

const auth = {
    required: jwt ({
        secret,
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optional: jwt ({
        secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

module.exports = auth;
const fs = require('fs');

module.exports = {
    adminAuth: {
        type: "credentials",
        users: [{
                username: "admin",
                password: "$2b$08$hy3C.0ch702D/HDUTXeFY.jSmA0WPfNAHqX/d2uBwDupnn64qdgt2",
                permissions: "*"
            },
            {
                username: "george",
                password: "$2b$08$wuAqPiKJlVN27eF5qJp.RuQYuy6ZYONW7a/UWYxDTtwKFCdB8F19y",
                permissions: "read"
            }
        ]
    },
    // ConfiguraciÃ³n para HTTPS
    https: {
        key: fs.readFileSync('/data/certs/privkey.pem'),
        cert: fs.readFileSync('/data/certs/cert.pem')
    },
    // Otras configuraciones de Node-RED pueden seguir aquÃ­...
};

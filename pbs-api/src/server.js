/* eslint-disable no-console */

import hapi from "hapi";
import router from "./server/router.js";
import {
    serverConstant
} from "./server/constant";

const server = new hapi.Server();

// read routes
router.importRoutes();

// jwt validate function
const validate = (decoded, request, callback) => {
    if (!decoded) {
        return callback(null, false);
    } else {
        return callback(null, true);
    }
};

server.connection({
    host: "localhost",
    port: "3001",
    routes: { cors: true } // enable cors
});

// set up jwt
server.register(require("hapi-auth-jwt2"), (err) => {
    if (!err) {
        console.log(serverConstant.registerAuthenticationMessage);
    }

    server.auth.strategy("jwt", "jwt", {
        key: "lF7ioZHOa4iafmUfhcWwkUFRb7P7F09K",
        validateFunc: validate,
        verifyOptions: {
            algorithms: ["HS256"]
        }
    });

    server.auth.default("jwt");

    // register route
    router.routes.forEach((routeSet) => {
        if (routeSet && routeSet.default) {
            if (routeSet.default.length > 0) {
                routeSet.default.forEach((route) => {
                    console.log(serverConstant.attachRouteMessage(route.path));
                    server.route(route);
                });
            }
        }
    });
});

server.start(err => {
    if (err) {
        console.error(serverConstant.serverErrorMessage);
        console.error(err);
    }

    server.on("response", (request) => {
        if (request.response.statusCode === 400) {
            // eslint-disable-next-line
            console.log(`${request.info.remoteAddress} : ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode} : Error: ${request.response.source.message}`);            
        } else {
            console.log(`${request.info.remoteAddress} : ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode}`);
        }
    });

    console.log(serverConstant.serverStartedMessage(server.info));
});

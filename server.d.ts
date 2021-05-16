import * as express from "express";
export declare class Server {
    app: express.Application;
    constructor();
    setRoutes(): void;
    error404Handler(): void;
    handleErrors(): void;
}

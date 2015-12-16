/**
 * Created by mzaferyahsi on 15/12/15.
 */
/// <reference path="../../../../typings/tsd.d.ts" />
import * as express from 'express'

export function initialize(router : express.Router) {
    router.get('/echo', function(req : express.Request, resp : express.Response){
        resp.json({
            message : 'Hello, World!'
        });
    });
};
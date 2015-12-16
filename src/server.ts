/**
 * Created by mzaferyahsi on 15/12/15.
 */
/// <reference path="../typings/tsd.d.ts" />

import * as express from 'express'
import * as api from './api'
import {RouterInstance} from "./models/routerInstance";

let app = express();
let port = process.env.PORT || 8080;

let apiList : RouterInstance[] = api.initialize()

for (var i = 0; i < apiList.length; i++) {
    app.use(apiList[i].endpoint, apiList[i].router);
}

app.listen(port, function () {
    console.log('Api started on port %d', port);
})
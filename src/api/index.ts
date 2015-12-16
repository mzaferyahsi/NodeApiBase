/**
 * Created by mzaferyahsi on 15/12/15.
 */
/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../models/tsd.d.ts" />

import * as express from 'express'
import * as v1 from './v1'
import {RouterInstance} from "../models/routerInstance";

export function initialize() : RouterInstance[] {
    var routerList : RouterInstance[] = [];

    let v1Router : express.Router = express.Router()
    v1.initialize(v1Router);

    let v1RouterInstance = new RouterInstance();
    v1RouterInstance.endpoint = '/api/v1';
    v1RouterInstance.router = v1Router;

    routerList.push(v1RouterInstance);

    return routerList;
}


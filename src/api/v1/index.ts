/**
 * Created by mzaferyahsi on 15/12/15.
 */
/// <reference path="../../../typings/tsd.d.ts" />
import * as express from 'express'

import * as echo from './echo'

export function initialize(router : express.Router) {
    echo.initialize(router);
}
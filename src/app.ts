'use strict';

/**
 * Main application file
 * Handle module creation and bootstraping
 */

import angular from 'angular'
import PhoneListController from './controllers/phoneListController'

const app = angular.module('phonecatApp', []);

app.controller('PhoneListController', PhoneListController);

angular.bootstrap(document, ['phonecatApp']);

export default app

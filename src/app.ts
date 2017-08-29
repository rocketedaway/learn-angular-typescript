'use strict';

/**
 * Main application file
 * Handle module creation and bootstraping
 */

import angular from 'angular'
import PhoneListComponent from './phone-list-component'

const app = angular.module('phonecatApp', []);

app.component('pnoneList', PhoneListComponent);

angular.bootstrap(document, ['phonecatApp']);

export default app

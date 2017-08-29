'use strict';

/**
 * Main application file
 * Handle module creation and bootstraping
 */

import angular from 'angular'
import PhoneListComponent from './components/phone-list/index'

const app = angular.module('phonecatApp', []);

app.component('phoneList', PhoneListComponent);

angular.bootstrap(document, ['phonecatApp']);

export default app

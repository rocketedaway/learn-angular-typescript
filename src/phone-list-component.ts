'use strict';

import PhoneListController from './phone-list-controller'

export default {
  template:
    '<ul>' +
      '<li ng-repeat="phone in $ctrl.phones">' +
        '<span>{{phone.name}}</span>' +
        '<p>{{phone.snippet}}</p>' +
      '</li>' +
    '</ul>',
  controller: PhoneListController
}

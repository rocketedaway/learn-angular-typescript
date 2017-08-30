'use strict';

import { IHttpService } from 'angular'

export default class PhoneListController {
  public phones: Array<Object>
  public query: String
  public order: String

  public $http: IHttpService
  public $inject = ['$http']

  constructor ($http) {
    this.order = "age";
    this.$http = $http;

    this.$http.get('data/phones.json').then(response => {
      this.phones = response.data as Array<Object>;
    });
  }
}

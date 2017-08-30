'use strict';

import phones from '../../data/phones.json'

export default class PhoneListController {
  public phones: Array<Object>
  public query: String
  public order: String

  constructor () {
    this.order = "age";
    this.phones = phones;
  }
}

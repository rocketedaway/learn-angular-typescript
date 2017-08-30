'use strict';

export default class PhoneListController {
  public phones: Array<Object>
  public query: String
  public order: String

  constructor () {
    this.order = "age";
    this.phones = [
      {
        name: 'Nexus S',
        age: 1,
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        age: 3,
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        age: 2,
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }
}

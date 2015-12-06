import Ember from 'ember';
const cards = [
  {type: 'visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/},
  {type: 'mastercard', pattern: /^5[1-5][0-9]{14}$/},
  {type: 'amex', pattern: /^3[47][0-9]{13}$/},
  {type: 'diners', pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/},
  {type: 'discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/},
  {type: 'jcb', pattern: /^(?:2131|1800|35\d{3})\d{11}$/}
];

export function payeezyCreditCardType(cardNumber/*, hash*/) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].pattern.test(cardNumber)) {
      return cards[i].type;
    }
  }
}

export default Ember.Helper.helper(payeezyCreditCardType);

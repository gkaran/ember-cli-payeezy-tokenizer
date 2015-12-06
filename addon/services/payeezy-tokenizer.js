import Ember from 'ember';
const namespace = 'api-cert.payeezy.com';
const path = 'v1/securitytokens';

export default Ember.Service.extend({

  apiKey: null,
  jsSecurityKey: null,
  taToken: null,
  auth: null,

  setup(apiKey, jsSecurityKey, taToken, auth) {
    this.set('apiKey', apiKey);
    this.set('jsSecurityKey', jsSecurityKey);
    this.set('taToken', taToken);
    this.set('auth', auth);
  },

  tokenize(cardInfo = {}) {
    cardInfo.auth = this.get('auth');
    cardInfo.apikey = this.get('apiKey');
    cardInfo['ta_token'] = this.get('taToken');
    cardInfo['js_security_key'] = this.get('jsSecurityKey');
    cardInfo.type = 'FDToken';

    //this.validateCardInfo(cardInfo);

    return new Ember.RSVP.Promise((resolve, reject) => {

      let options = {
        type: 'GET',
        url: `https://${namespace}/${path}`,
        data: cardInfo,
        dataType: 'jsonp'
      };

      Ember.$.ajax(options).done(response => {
        if (response.status === 201) {
          resolve(response.results);
        } else {
          reject(response.results);
        }
      });
    });
  }

});

import { moduleFor, test } from 'ember-qunit';

moduleFor('service:payeezy-tokenizer', 'Unit | Service | payeezy tokenizer', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

var jsSecurityKey = 'js-f75b323e01945bd5925168c4dfdfc813f75b323e01945bd5';
var taToken = 'NOIW';
var apiKey = 'ZcbGoYjus4PYZUSZlAQdHzEgKhnfAJSv';
const cardType = 'visa';
const cardholderName = 'John Doe';
const cardNumber = '4111111111111111';
const exp_date = '1033';
const cvv = '452';

function validate_success_response(assert, response) {
  assert.ok(response.correlation_id);
  assert.equal(response.status, 'success');
  assert.equal(response.type, 'FDToken');
  assert.ok(response.token);
  assert.ok(response.token.value);
  assert.equal(response.token.type, cardType);
  assert.equal(response.token.cardholder_name, cardholderName);
  assert.equal(response.token.exp_date, exp_date);
}

function validate_failed_response(assert, response) {
  assert.equal(response.type, 'FDToken');
  assert.equal(response.status, 'failed');
  assert.ok(response.Error);
  assert.ok(response.Error.messages);
}

test('tokenize valid card', function(assert) {
  let service = this.subject();

  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(response => {
    validate_success_response(assert, response);
    done();
  }, () => {
    assert.ok(false, 'Tokenization failed');
    done();
  });

});

test('tokenize with incorrect api key', function(assert) {
  let service = this.subject();
  service.setup(`${apiKey}1231232`, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect api key');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize with incorrect js security key', function(assert) {
  let service = this.subject();
  service.setup(apiKey, `${jsSecurityKey}123123`, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect js security key');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize with incorrect ta token', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, 'asd123asdassdaad12', true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize without cardholder name', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize without card number', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize without expiration date', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize without cvv', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': exp_date
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize without past expiration date', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': cardNumber,
    'credit_card.exp_date': '1010',
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize with invalid card number', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': cardType,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': '41',
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

test('tokenize with non recognized card type', function(assert) {
  let service = this.subject();
  service.setup(apiKey, jsSecurityKey, taToken, true);

  let data = {
    'credit_card.type': undefined,
    'credit_card.cardholder_name': cardholderName,
    'credit_card.card_number': '411111111',
    'credit_card.exp_date': exp_date,
    'credit_card.cvv': cvv
  };

  var done = assert.async();
  service.tokenize(data).then(() => {
    assert.ok(false, 'Received success response with incorrect ta token');
    done();
  }, response => {
    validate_failed_response(assert, response);
    done();
  });

});

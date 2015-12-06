import { payeezyCreditCardType } from '../../../helpers/payeezy-credit-card-type';
import { module, test } from 'qunit';

module('Unit | Helper | payeezy credit card type');

test('visa 4735454787809873', assert => assert.equal(payeezyCreditCardType(4735454787809873), 'visa'));
test('visa 4916783195527797', assert => assert.equal(payeezyCreditCardType(4916783195527797), 'visa'));
test('visa 4024007137863345', assert => assert.equal(payeezyCreditCardType(4024007137863345), 'visa'));
test('visa 4716247478600863', assert => assert.equal(payeezyCreditCardType(4716247478600863), 'visa'));
test('visa 4929965124370127', assert => assert.equal(payeezyCreditCardType(4929965124370127), 'visa'));
test('visa 4532462855951480', assert => assert.equal(payeezyCreditCardType(4532462855951480), 'visa'));
test('visa 4716752172030069', assert => assert.equal(payeezyCreditCardType(4716752172030069), 'visa'));
test('visa 4118509189340350', assert => assert.equal(payeezyCreditCardType(4118509189340350), 'visa'));
test('visa 4716421090236022', assert => assert.equal(payeezyCreditCardType(4716421090236022), 'visa'));
test('visa 4024007126069169', assert => assert.equal(payeezyCreditCardType(4024007126069169), 'visa'));

test('visa 4716635717041', assert => assert.equal(payeezyCreditCardType(4716635717041), 'visa'));
test('visa 4916972407913', assert => assert.equal(payeezyCreditCardType(4916972407913), 'visa'));
test('visa 4485087491618', assert => assert.equal(payeezyCreditCardType(4485087491618), 'visa'));
test('visa 4485721397312', assert => assert.equal(payeezyCreditCardType(4485721397312), 'visa'));
test('visa 4485017662106', assert => assert.equal(payeezyCreditCardType(4485017662106), 'visa'));
test('visa 4916662253411', assert => assert.equal(payeezyCreditCardType(4916662253411), 'visa'));
test('visa 4024007117274', assert => assert.equal(payeezyCreditCardType(4024007117274), 'visa'));
test('visa 4916407371767', assert => assert.equal(payeezyCreditCardType(4916407371767), 'visa'));
test('visa 4556783484089', assert => assert.equal(payeezyCreditCardType(4556783484089), 'visa'));
test('visa 4916956658515', assert => assert.equal(payeezyCreditCardType(4916956658515), 'visa'));

test('mastercard 5333690941772720', assert => assert.equal(payeezyCreditCardType(5333690941772720), 'mastercard'));
test('mastercard 5450476013236118', assert => assert.equal(payeezyCreditCardType(5450476013236118), 'mastercard'));
test('mastercard 5330872298911795', assert => assert.equal(payeezyCreditCardType(5330872298911795), 'mastercard'));
test('mastercard 5261897173322191', assert => assert.equal(payeezyCreditCardType(5261897173322191), 'mastercard'));
test('mastercard 5171935889194378', assert => assert.equal(payeezyCreditCardType(5171935889194378), 'mastercard'));
test('mastercard 5403057827846033', assert => assert.equal(payeezyCreditCardType(5403057827846033), 'mastercard'));
test('mastercard 5193683265786284', assert => assert.equal(payeezyCreditCardType(5193683265786284), 'mastercard'));
test('mastercard 5183210817916482', assert => assert.equal(payeezyCreditCardType(5183210817916482), 'mastercard'));
test('mastercard 5183210817916482', assert => assert.equal(payeezyCreditCardType(5183210817916482), 'mastercard'));
test('mastercard 5324229044440744', assert => assert.equal(payeezyCreditCardType(5324229044440744), 'mastercard'));
test('mastercard 5469758701611564', assert => assert.equal(payeezyCreditCardType(5469758701611564), 'mastercard'));

test('discover 6011014174486584', assert => assert.equal(payeezyCreditCardType(6011014174486584), 'discover'));
test('discover 6011998678358077', assert => assert.equal(payeezyCreditCardType(6011998678358077), 'discover'));
test('discover 6011766066341025', assert => assert.equal(payeezyCreditCardType(6011766066341025), 'discover'));
test('discover 6011831907178109', assert => assert.equal(payeezyCreditCardType(6011831907178109), 'discover'));
test('discover 6011249248489954', assert => assert.equal(payeezyCreditCardType(6011249248489954), 'discover'));
test('discover 6011804137759824', assert => assert.equal(payeezyCreditCardType(6011804137759824), 'discover'));
test('discover 6011241004444257', assert => assert.equal(payeezyCreditCardType(6011241004444257), 'discover'));
test('discover 6011475246380396', assert => assert.equal(payeezyCreditCardType(6011475246380396), 'discover'));
test('discover 6011529436199279', assert => assert.equal(payeezyCreditCardType(6011529436199279), 'discover'));
test('discover 6011073720138602', assert => assert.equal(payeezyCreditCardType(6011073720138602), 'discover'));

test('amex 376837092995639', assert => assert.equal(payeezyCreditCardType(376837092995639), 'amex'));
test('amex 342826377101923', assert => assert.equal(payeezyCreditCardType(342826377101923), 'amex'));
test('amex 374728492690577', assert => assert.equal(payeezyCreditCardType(374728492690577), 'amex'));
test('amex 374856103418524', assert => assert.equal(payeezyCreditCardType(374856103418524), 'amex'));
test('amex 370123793996390', assert => assert.equal(payeezyCreditCardType(370123793996390), 'amex'));
test('amex 373524629381771', assert => assert.equal(payeezyCreditCardType(373524629381771), 'amex'));
test('amex 346024585626693', assert => assert.equal(payeezyCreditCardType(346024585626693), 'amex'));
test('amex 343157255446894', assert => assert.equal(payeezyCreditCardType(343157255446894), 'amex'));
test('amex 373634235828774', assert => assert.equal(payeezyCreditCardType(373634235828774), 'amex'));
test('amex 376136709009425', assert => assert.equal(payeezyCreditCardType(376136709009425), 'amex'));

test('diners 38511847240209', assert => assert.equal(payeezyCreditCardType(38511847240209), 'diners'));
test('diners 30257897177796', assert => assert.equal(payeezyCreditCardType(30257897177796), 'diners'));
test('diners 30314571175586', assert => assert.equal(payeezyCreditCardType(30314571175586), 'diners'));
test('diners 30052547525431', assert => assert.equal(payeezyCreditCardType(30052547525431), 'diners'));
test('diners 30100762389437', assert => assert.equal(payeezyCreditCardType(30100762389437), 'diners'));
test('diners 38051761121424', assert => assert.equal(payeezyCreditCardType(38051761121424), 'diners'));
test('diners 30126544696542', assert => assert.equal(payeezyCreditCardType(30126544696542), 'diners'));
test('diners 38697408053055', assert => assert.equal(payeezyCreditCardType(38697408053055), 'diners'));
test('diners 30253480676021', assert => assert.equal(payeezyCreditCardType(30253480676021), 'diners'));
test('diners 30198705346811', assert => assert.equal(payeezyCreditCardType(30198705346811), 'diners'));

test('jcb 3566003566003566', assert => assert.equal(payeezyCreditCardType(3566003566003566), 'jcb'));
test('jcb 3528000000000007', assert => assert.equal(payeezyCreditCardType(3528000000000007), 'jcb'));
test('jcb 3528000000000007', assert => assert.equal(payeezyCreditCardType(3528000000000007), 'jcb'));
test('jcb 3528000000000007', assert => assert.equal(payeezyCreditCardType(3528000000000007), 'jcb'));
test('jcb 213193692042852', assert => assert.equal(payeezyCreditCardType(213193692042852), 'jcb'));
test('jcb 180012362524156', assert => assert.equal(payeezyCreditCardType(180012362524156), 'jcb'));
test('jcb 3528150686674516', assert => assert.equal(payeezyCreditCardType(3528150686674516), 'jcb'));
test('jcb 3528677921880094', assert => assert.equal(payeezyCreditCardType(3528677921880094), 'jcb'));
test('jcb 3566002020360505', assert => assert.equal(payeezyCreditCardType(3566002020360505), 'jcb'));
test('jcb 3566007773502500', assert => assert.equal(payeezyCreditCardType(3566007773502500), 'jcb'));

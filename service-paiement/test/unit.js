
const chai = require('chai');
const expect = chai.expect;

const checkInformationsCard = require('../repository/checkInformationCard')
const rightCardNumberMock = require('./mocks/rightCardNumber.json')
const wrongCardNumberMock = require('./mocks/wrongCardNumber.json')

describe('check information card', () => {
  it('should return true if card Informations are correct', () => {
    const response = checkInformationsCard.checkInformationsCard(rightCardNumberMock.correctCardNumber)    
    expect(response).to.be.deep.equal(true);
  });
  it('should return false if card Informations are incorrect', () => {
    const response = checkInformationsCard.checkInformationsCard(wrongCardNumberMock.wrongCardNumber)
    
    expect(response).to.be.deep.equal(false);
  });
});

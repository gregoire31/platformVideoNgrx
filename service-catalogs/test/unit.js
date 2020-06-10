// const sinon = require('sinon');
const chai = require('chai');
const mongoose = require('mongoose');
// const request = require('request-promise');
const expect = chai.expect;

const catalogsRepo = require('../repository/film');
const listCatalogs = require('./mocks/catalogs_list.json')
const movie = require('./mocks/movie.json')
before(() => {
  mongoose.connect('mongodb://mongo:27017/films', {useNewUrlParser: true, useUnifiedTopology: true});
});

after(() => {
  mongoose.connection.close();
});

describe('catalogs list', () => {
  it('should return the list of all movies', async () => {
    const response = await catalogsRepo.findAllFilms(true);
    expect(response).to.be.deep.equal(listCatalogs);
  });
  it('should return one movie', async () => {
    let response = await catalogsRepo.findFilmById(movie._id,true);
    expect(response).to.be.deep.equal(movie);
  });
});

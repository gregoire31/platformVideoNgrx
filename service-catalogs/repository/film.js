const filmModel = require('../model/film');

module.exports.findAllFilms = async (lean = false) => {
  return await filmModel.find({}).lean(lean);
}

module.exports.findFilmById = async (id, lean = false) => {
  const film = await filmModel.findOne({_id: id}).lean(lean);
  return film; 
}
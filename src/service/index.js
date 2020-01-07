const database = require("../database/db.json");
const R = require("ramda");

const getBrands = function() {
  return R.compose(
    R.dropRepeats,
    R.map(x => x.brand)
  )(database);
};

const getModels = function(brand) {
  return R.compose(
    R.dropRepeats,
    R.map(x => x.model),
    R.filter(x => x.brand === brand)
  )(database);
};

const getYears = function(brand, model) {
  return R.compose(
    R.dropRepeats,
    R.map(x => x.modelYear),
    R.filter(x => x.brand === brand && x.model === model)
  )(database);
};

const getVersions = function(brand, model, year) {
  return R.compose(
    R.dropRepeats,
    R.map(x => ({ versionId: x.versionId, version: x.version })),
    R.filter(
      x => x.brand === brand && x.model === model && x.modelYear === year
    )
  )(database);
};

const getCar = function(brand, model, year, versionId) {
  return R.find(
    x =>
      x.brand === brand &&
      x.model === model &&
      x.modelYear === year &&
      x.versionId === versionId
  )(database);
};

module.exports = {
  getBrands: getBrands,
  getModels: getModels,
  getYears: getYears,
  getVersions: getVersions,
  getCar: getCar
};

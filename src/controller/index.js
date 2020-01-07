const service = require("../service");

async function getBrands(req, res) {
  try {
    const body = service.getBrands();
    return res.status(200).send(body);
  } catch (e) {
    console.error(e);
    return res.status(404).send({
      message: "Ocorreu um erro, tente novamente mais tarde!"
    });
  }
}

async function getModels(req, res) {
  try {
    const { brand } = req.params;
    const body = service.getModels(brand);

    return res.status(200).send(body);
  } catch (e) {
    console.error(e);
    return res.status(404).send({
      message: "Ocorreu um erro, tente novamente mais tarde!"
    });
  }
}

async function getYears(req, res) {
  try {
    const { brand, model } = req.params;
    const body = service.getYears(brand, model);

    return res.status(200).send(body);
  } catch (e) {
    console.error(e);
    return res.status(404).send({
      message: "Ocorreu um erro, tente novamente mais tarde!"
    });
  }
}

async function getVersions(req, res) {
  try {
    const { brand, model, year } = req.params;
    const body = service.getVersions(brand, model, year);

    return res.status(200).send(body);
  } catch (e) {
    console.error(e);
    return res.status(404).send({
      message: "Ocorreu um erro, tente novamente mais tarde!"
    });
  }
}

async function getCar(req, res) {
  try {
    const { brand, model, year, versionId } = req.params;
    const body = service.getCar(brand, model, year, versionId);

    return res.status(200).send(body);
  } catch (e) {
    console.error(e);
    return res.status(404).send({
      message: "Ocorreu um erro, tente novamente mais tarde!"
    });
  }
}
// async function getAllWishlists(req, res) {
//   try {
//     const wishlists = await firebaseService.getAllWishlists();

//     if (wishlists.length > 0) {
//       return res.status(200).send(wishlists);
//     }

//     return res.status(404).send({
//       error: "WISHLIST_COLLECTION_IS_EMPTY",
//       message: `Não existem wishlists no banco de dados`
//     });
//   } catch (e) {
//     console.error(e);
//     return res.status(500).send({
//       message: "Ocorreu um erro, tente novamente mais tarde!"
//     });
//   }
// }

// async function createWishlist(req, res) {
//   try {
//     const body = req.body;

//     // const savedWishlist = await firebaseService.createWishlist(body);
//     const savedWishlist = await wishlistService.createWishlist(body);

//     return res.status(201).send({
//       message: "CREATED",
//       id: savedWishlist
//     });
//   } catch (e) {
//     console.error(e);
//     return res.status(e.status).send({
//       message: e.message
//     });
//   }
// }

module.exports = {
  getBrands: getBrands,
  getModels: getModels,
  getYears: getYears,
  getVersions: getVersions,
  getCar: getCar
};

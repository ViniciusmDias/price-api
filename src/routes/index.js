const express = require("express");
const router = express.Router();
const Controller = require("../controller");

router.get("/brands", Controller.getBrands);
router.get("/brands/:brand/models", Controller.getModels);
router.get("/brands/:brand/models/:model/years", Controller.getYears);
router.get(
  "/brands/:brand/models/:model/years/:year/versions",
  Controller.getVersions
);

router.get(
  "/brands/:brand/models/:model/years/:year/versions/:versionId",
  Controller.getCar
);

// router.get("/wishlist", Controller.getAllWishlists);

// router.post("/wishlist", Controller.createWishlist);

module.exports = router;

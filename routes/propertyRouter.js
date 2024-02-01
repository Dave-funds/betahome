const router = require("express").Router();
const {
  handleAddProperty,
  handleGetAllProperties,
  handleGetRecentProperties,
  handleDeleteProperty,
  handleGetASingleProperty,
  handleEditProperty,
} = require("../controllers/propertyController");

router.route("/").get(handleGetAllProperties).post(handleAddProperty);
router.get("/recent", handleGetRecentProperties);

router
  .route("/:propertyId")
  .get(handleGetASingleProperty)
  .patch(handleEditProperty)
  .delete(handleDeleteProperty);

module.exports = router;

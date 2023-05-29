const express = require("express");
const router = express.Router();

const LeadController = require("../controller/leadController");
router.post("/add_Lead", LeadController.addLead);
router.get("/get_Lead", LeadController.getLead);
router.get("/id", LeadController.getById);
router
  .route("/:id")
  .get(LeadController.getById)
  .patch(LeadController.updateById)
  .delete(LeadController.deleteById);

module.exports = router;
const express = require("express");
const router = express.Router();

const DepartmentController = require("../controller/departmentController");
router.post("/add_Department", DepartmentController.addDepartment);
router.get("/get_Department", DepartmentController.getDepartments);
router.get("/id", DepartmentController.getById);
router
  .route("/:id")
  .get(DepartmentController.getById)
  .patch(DepartmentController.updateById)
  .delete(DepartmentController.deleteById);

module.exports = router;
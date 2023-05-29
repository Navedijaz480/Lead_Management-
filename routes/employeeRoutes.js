const express = require("express");
const router = express.Router();

const EmployeeController = require("../controller/employeeController");
router.post("/add_Employee", EmployeeController.addEmployee);
router.get("/get_Employee", EmployeeController.getEmployee);
router.get("/id", EmployeeController.getById);
router
  .route("/:id")
  .get(EmployeeController.getById)
  .patch(EmployeeController.updateById)
  .delete(EmployeeController.deleteById);

module.exports = router;
const router = require("express").Router();
const DriversController = require("../controllers/DriversController");

router.post("/drivers", DriversController.save);
router.get("/drivers", DriversController.getAll);
router.get("/drivers/:ID", DriversController.getOne);
router.patch("/drivers/:ID", DriversController.update);
router.delete("/drivers/:ID", DriversController.remove);

module.exports = router;

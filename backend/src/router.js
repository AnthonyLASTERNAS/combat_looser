const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const usersControllers = require("./controllers/usersControllers");
const slidesControllers = require("./controllers/slidesControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);

router.get("/slides", slidesControllers.browse);
router.get("/slides/:id", slidesControllers.read);

module.exports = router;

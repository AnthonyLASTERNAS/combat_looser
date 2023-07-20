const AbstractManager = require("./AbstractManager");

class SlidesManager extends AbstractManager {
  constructor() {
    super({ table: "slides" });
  }
}

module.exports = SlidesManager;
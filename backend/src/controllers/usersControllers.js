const models = require("../models");

const browse = (req, res) => {
  models.users
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.users
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const { email, password, firstname, lastname, role } = req.body;
  models.users
    .create(email, password, firstname, lastname, role)
    .then(([rows]) => {
      res.status(201).json({ id: rows.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: "L’inscription n’a pas pu être effectuée avec succès.",
      });
    });
};

const edit = (req, res) => {
  const { id } = req.params;
  const { email, password, firstname, lastname, role } = req.body;
  models.users
    .update(email, password, firstname, lastname, role, id)
    .then(([rows]) => {
      if (rows.affectedRows) res.sendStatus(204);
      else res.sendStatus(500);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.users
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  create,
  edit,
  destroy,
};

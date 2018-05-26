/**
 * Created by Max Kudla.
 */
const express = require('express');
const jwt = require('jsonwebtoken');

const jwtSecret = 'asdfasdfasdfasdf';

const api = express.Router();

api.post('/auth/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (username && password) {
    res.status(200).send({
      token: jwt.sign({ username, password }, jwtSecret),
      user: { username },
    });
  } else {
    res.status(401).send();
  }
});

module.exports = api;

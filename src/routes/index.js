import user from './user'
import api from './api'
import express from 'express'

const router = express.Router();

export default (app) => {
  app.use('/user', user);
  app.use('/api', api);
}

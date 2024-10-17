import express from 'express'
import {
  createConfigController,
  deleteConfigController,
  getConfigController,
  updateConfigController
} from 'src/controllers/configController'

export const configRouter = express.Router()

configRouter.get('/', getConfigController)
configRouter.post('/', createConfigController)
configRouter.put('/', updateConfigController)
configRouter.delete('/', deleteConfigController)

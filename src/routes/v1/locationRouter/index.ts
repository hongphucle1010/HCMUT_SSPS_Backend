import express from 'express'
import {
  createLocationController,
  deleteLocationController,
  getLocationController,
  updateLocationController
} from 'src/controllers/locationController'

export const locationRouter = express.Router()

locationRouter.get('/', getLocationController)
locationRouter.post('/', createLocationController)
locationRouter.put('/', updateLocationController)
locationRouter.delete('/', deleteLocationController)

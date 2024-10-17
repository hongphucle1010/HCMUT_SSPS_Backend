import express from 'express'
import {
  createPrinterController,
  deletePrinterController,
  getPrinterController,
  updatePrinterController
} from 'src/controllers/printerController'

export const printerRouter = express.Router()

printerRouter.get('/', getPrinterController)
printerRouter.post('/', createPrinterController)
printerRouter.put('/', updatePrinterController)
printerRouter.delete('/', deletePrinterController)
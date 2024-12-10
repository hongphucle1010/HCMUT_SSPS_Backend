import express from 'express'
import { blockLoggedInMiddleware, handleSpsoLogin } from '../../../controllers/authController/login'
import { handleSpsoSignUp } from '../../../controllers/authController/signup'
import {
  deleteSpsoController,
  getAllUnprintedPrintingLogsController,
  getSpsoController,
  makePrintingLogAsPrintedController,
  updateSpsoController
} from '../../../controllers/spsoController'

export const spsoRouter = express.Router()

spsoRouter.post('/signup', [...blockLoggedInMiddleware, handleSpsoSignUp])
spsoRouter.post('/login', [...blockLoggedInMiddleware, handleSpsoLogin])
spsoRouter.get('/getUnprintedPrintingLogs', getAllUnprintedPrintingLogsController)
spsoRouter.get('/', getSpsoController)
spsoRouter.put('/', updateSpsoController)
spsoRouter.put('/markPrintingLogAsPrinted', makePrintingLogAsPrintedController)
spsoRouter.delete('/', deleteSpsoController)

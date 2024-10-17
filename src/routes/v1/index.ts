// Route: /api/v1
import express from 'express'
import { authRouter } from './userRouter/auth'
import { blockLoggedInMiddleware, isLoginAuth, onlyAllowSPSO } from '../../controllers/authController/login'
import { configRouter } from './configRouter'
import { fileTypeRouter } from './fileTypeRouter'
import { locationRouter } from './locationRouter'
import { printerRouter } from './printerRouter'
import { printingLogRouter } from './printingLogRouter'
import { spsoRouter } from './spsoRouter'

export const routes = express.Router()

routes.use('/auth', [isLoginAuth, authRouter])
routes.use('/config', [...blockLoggedInMiddleware, onlyAllowSPSO, configRouter])
routes.use('/filetype', [...blockLoggedInMiddleware, fileTypeRouter])
routes.use('/location', [...blockLoggedInMiddleware, locationRouter])
routes.use('/printer', [...blockLoggedInMiddleware, printerRouter])
routes.use('/printinglog', [...blockLoggedInMiddleware, printingLogRouter])
routes.use('/spso', spsoRouter)

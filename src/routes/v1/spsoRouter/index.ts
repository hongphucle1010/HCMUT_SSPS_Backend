import express from 'express'
import { blockLoggedInMiddleware, handleSpsoLogin } from 'src/controllers/authController/login'
import { handleSpsoSignUp } from 'src/controllers/authController/signup'
import { deleteSpsoController, getSpsoController, updateSpsoController } from 'src/controllers/spsoController'

export const spsoRouter = express.Router()

spsoRouter.post('/signup', [...blockLoggedInMiddleware, handleSpsoSignUp])
spsoRouter.post('/login', [...blockLoggedInMiddleware, handleSpsoLogin])
spsoRouter.get('/', getSpsoController)
spsoRouter.put('/', updateSpsoController)
spsoRouter.delete('/', deleteSpsoController)

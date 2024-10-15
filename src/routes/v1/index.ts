// Route: /api/v1
import express from 'express'
import { authRouter } from './userRouter/auth'
import { isLoginAuth } from '~/controllers/authController/login'

export const routes = express.Router()

routes.use('/auth', [isLoginAuth, authRouter])

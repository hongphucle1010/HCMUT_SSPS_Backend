/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request, NextFunction } from 'express'
import passport from 'passport'
import { body, validationResult } from 'express-validator'
import { Student } from '@prisma/client'
import { blockLoggedIn } from './login'
import { HttpError } from '../../lib/error/HttpErrors'
import { HttpStatus } from '../../lib/statusCode'
import { MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH } from '../../configs/number'
import ERROR_MESSAGES from '../../configs/errorMessages'
import SUCCESS_MESSAGES from '../../configs/successMessages'
import expressAsyncHandler from 'express-async-handler'
import { SignUpResponse } from './type'

const validateUser = [
  body('username')
    .trim()
    .isLength({ min: MIN_USERNAME_LENGTH })
    .withMessage(ERROR_MESSAGES.auth.signUp.shortUsername)
    .escape(),
  body('password').isLength({ min: MIN_PASSWORD_LENGTH }).withMessage(ERROR_MESSAGES.auth.signUp.shortPassword),
  expressAsyncHandler((req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(errors.array())
      throw new HttpError(ERROR_MESSAGES.other.invalidInput, HttpStatus.BadRequest, errors.array())
    }
    next()
  })
]

const handleSignUp = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('signup', { session: false }, async (error: Error, user: Student | null, info: any) => {
    if (error) {
      return next(error)
    }
    if (!user) {
      return next(new HttpError(info.message, HttpStatus.BadRequest))
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user
    const response: SignUpResponse = {
      message: SUCCESS_MESSAGES.auth.signUp,
      user: userWithoutPassword
    }
    res.status(HttpStatus.Created).json(response)
  })(req, res, next)
})

const signUpController = [blockLoggedIn, ...validateUser, handleSignUp]
export { signUpController }

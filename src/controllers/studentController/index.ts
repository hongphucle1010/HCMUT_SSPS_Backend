import expressAsyncHandler from 'express-async-handler'
import { getStudentById, updateStudentPrintBalance } from '../../model/Student'
import { HttpStatus } from '../../lib/statusCode'
import { Request, Response } from 'express'

export const getStudentController = expressAsyncHandler(async (req: Request, res: Response) => {
  const student = await getStudentById(req.params.id)
  res.status(HttpStatus.OK).json(student)
})

export const updateStudentPageBalanceController = expressAsyncHandler(async (req: Request, res: Response) => {
  const response = await updateStudentPrintBalance(req.body.id, parseInt(req.body.printBalance))
  res.status(HttpStatus.OK).json(response)
})

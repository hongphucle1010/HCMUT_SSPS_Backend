import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { HttpStatus } from '../../lib/statusCode'
import { createPrintingLog, deletePrintingLog, getPrintingLogById, updatePrintingLog } from '../../model/PrintingLog'
import { updateStudentPrintBalance } from '../../model/Student'
import { HttpError } from '../../lib/error/HttpErrors'

export const createPrintingLogController = expressAsyncHandler(async (req: Request, res: Response) => {
  const currentBalance = req.body.currentBalance
  const printingPages = req.body.numPages * req.body.copies * (req.body.pageSize == 'A3' ? 2 : 1)
  const newBalance = currentBalance - printingPages
  if (newBalance < 0) {
    throw new HttpError('Insufficient balance', HttpStatus.BadRequest)
  }
  const printingLog = await createPrintingLog(req.body)
  const studentPrintBalance = await updateStudentPrintBalance(req.body.studentId, newBalance)
  res.status(HttpStatus.Created).json({ ...printingLog, newBalance: studentPrintBalance })
})

export const getPrintingLogController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Get printing log
  const printingLogId = req.params.id
  const printingLog = await getPrintingLogById(printingLogId)
  res.status(HttpStatus.OK).json(printingLog)
})

export const updatePrintingLogController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Update printing log
  const printingLog = await updatePrintingLog(req.body.id, req.body)
  res.status(HttpStatus.OK).json(printingLog)
})

export const deletePrintingLogController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Delete printing log
  await deletePrintingLog(req.body.id)
  res.status(HttpStatus.NoContent).send()
})

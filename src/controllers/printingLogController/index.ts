import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { HttpStatus } from 'src/lib/statusCode'
import { createPrintingLog, deletePrintingLog, getPrintingLogById, updatePrintingLog } from 'src/model/PrintingLog'

export const createPrintingLogController = expressAsyncHandler(async (req: Request, res: Response) => {
  const printingLog = await createPrintingLog(req.body)
  res.status(HttpStatus.Created).json(printingLog)
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

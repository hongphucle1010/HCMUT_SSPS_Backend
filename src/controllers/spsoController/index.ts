import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { HttpStatus } from '../../lib/statusCode'
import { createSPSO, deleteSPSO, getSPSOById, updateSPSO } from '../../model/SPSO'
import {
  getAllPrintingLogsOfAllStudents,
  getUnprintedPrintingLogs,
  markPrintingLogAsPrinted
} from '../../model/PrintingLog'

export const createSpsoController = expressAsyncHandler(async (req: Request, res: Response) => {
  const spso = await createSPSO(req.body)
  res.status(HttpStatus.Created).json(spso)
})

export const getSpsoController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Get spso
  const spsoId = req.params.id
  const spso = await getSPSOById(spsoId)
  res.status(HttpStatus.OK).json(spso)
})

export const updateSpsoController = expressAsyncHandler(async (req: Request, res: Response) => {
  const spso = await updateSPSO(req.body.id, req.body)
  res.status(HttpStatus.OK).json(spso)
})

export const deleteSpsoController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Delete spso
  await deleteSPSO(req.body.id)
  res.status(HttpStatus.NoContent).send()
})

export const makePrintingLogAsPrintedController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Mark printing log as printed
  const printingLog = await markPrintingLogAsPrinted(req.body.id)
  res.status(HttpStatus.OK).json(printingLog)
})

export const getAllUnprintedPrintingLogsController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Get all unprinted printing logs
  const printingLogs = await getUnprintedPrintingLogs()
  res.status(HttpStatus.OK).json(printingLogs)
})

export const spsoGetAllPrintingLogsController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Get all printing logs
  const printingLogs = await getAllPrintingLogsOfAllStudents()
  res.status(HttpStatus.OK).json(printingLogs)
})

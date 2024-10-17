import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { HttpStatus } from '../../lib/statusCode'
import { createConfig, deleteConfig, getConfigById, updateConfig } from '../../model/Config'

export const createConfigController = expressAsyncHandler(async (req: Request, res: Response) => {
  const config = await createConfig(req.body)
  res.status(HttpStatus.Created).json(config)
})

export const getConfigController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Get config
  const configId = req.params.id
  const config = await getConfigById(configId)
  res.status(HttpStatus.OK).json(config)
})

export const updateConfigController = expressAsyncHandler(async (req: Request, res: Response) => {
  const config = await updateConfig(req.body.id, req.body)
  res.status(HttpStatus.OK).json(config)
})

export const deleteConfigController = expressAsyncHandler(async (req: Request, res: Response) => {
  // Delete config
  await deleteConfig(req.body.id)
  res.status(HttpStatus.NoContent).send()
})

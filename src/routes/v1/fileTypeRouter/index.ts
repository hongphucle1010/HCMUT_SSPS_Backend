import express from 'express'
import {
  createFileTypeController,
  deleteFileTypeController,
  getFileTypeController,
  updateFileTypeController
} from 'src/controllers/fileTypeController'

export const fileTypeRouter = express.Router()

fileTypeRouter.get('/', getFileTypeController)
fileTypeRouter.post('/', createFileTypeController)
fileTypeRouter.put('/', updateFileTypeController)
fileTypeRouter.delete('/', deleteFileTypeController)

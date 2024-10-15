/* eslint-disable @typescript-eslint/no-explicit-any */
import { FileType } from '@prisma/client'
import prisma from '../../client'

export async function createFileType(fileType: FileType) {
  try {
    return await prisma.fileType.create({
      data: fileType
    })
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error('FileType already exists')
    }
    throw error
  }
}

export async function getFileTypeById(id: string) {
  return await prisma.fileType.findUnique({
    where: { id }
  })
}

export async function updateFileType(id: string, fileType: FileType) {
  return await prisma.fileType.update({
    where: { id },
    data: fileType
  })
}

export async function deleteFileType(id: string) {
  return await prisma.fileType.delete({
    where: { id }
  })
}

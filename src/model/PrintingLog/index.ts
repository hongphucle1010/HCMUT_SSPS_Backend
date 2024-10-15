/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrintingLog } from '@prisma/client'
import prisma from '../../client'

export async function createPrintingLog(printingLog: PrintingLog) {
  try {
    return await prisma.printingLog.create({
      data: printingLog
    })
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error('PrintingLog already exists')
    }
    throw error
  }
}

export async function getPrintingLogById(id: string) {
  return await prisma.printingLog.findUnique({
    where: { id }
  })
}

export async function updatePrintingLog(id: string, printingLog: PrintingLog) {
  return await prisma.printingLog.update({
    where: { id },
    data: printingLog
  })
}

export async function deletePrintingLog(id: string) {
  return await prisma.printingLog.delete({
    where: { id }
  })
}

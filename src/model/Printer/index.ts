/* eslint-disable @typescript-eslint/no-explicit-any */
import { Printer } from '@prisma/client'
import prisma from '../../client'

export async function createPrinter(printer: Printer) {
  try {
    return await prisma.printer.create({
      data: printer
    })
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error('Printer already exists')
    }
    throw error
  }
}

export async function getPrinterById(id: string) {
  return await prisma.printer.findUnique({
    where: { id }
  })
}

export async function updatePrinter(id: string, printer: Printer) {
  return await prisma.printer.update({
    where: { id },
    data: printer
  })
}

export async function deletePrinter(id: string) {
  return await prisma.printer.delete({
    where: { id }
  })
}

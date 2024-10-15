import { Student } from '@prisma/client'

type StudentWithoutPassword = Omit<Student, 'password'>
interface LogInResponse {
  token: string
  student: StudentWithoutPassword
}
interface SignUpResponse {
  message: string
  student: StudentWithoutPassword
}

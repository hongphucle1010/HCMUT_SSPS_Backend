import { Student } from '@prisma/client'

type StudentWithoutPassword = Omit<Student, 'password'>
interface LogInResponse {
  token: string
  user: StudentWithoutPassword
}
interface SignUpResponse {
  message: string
  user: StudentWithoutPassword
}

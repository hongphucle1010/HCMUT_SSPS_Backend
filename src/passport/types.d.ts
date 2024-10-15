import { JwtPayload } from 'jsonwebtoken'

export interface UserTokenized {
  id: string
  username: string
}

export interface PassportJwtPayload extends UserTokenized, JwtPayload {}

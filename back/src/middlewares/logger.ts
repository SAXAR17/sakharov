import {NextFunction, Request, Response} from 'express'

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`Request: ${req}`)
    console.log(`Response: ${res}`)
    next()
}
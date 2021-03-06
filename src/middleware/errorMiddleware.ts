import { NextFunction, Request, Response } from "express"

export const notFound = (req : Request, res : Response, next : NextFunction) => {
    const err = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(err)
}

export const errorHandler = (err :any , req : Request, res : Response, next : NextFunction ) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack : err.stack
    })
}
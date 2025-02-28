import { Response } from "express"

type TResponses<T> = {
    statusCode: number,
    success: boolean,
    message: string,
    data: T,
    meta?: any
}

const sendResponse = <T>(res: Response, data: TResponses<T>) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
        meta: data.meta
    })
}

export default sendResponse
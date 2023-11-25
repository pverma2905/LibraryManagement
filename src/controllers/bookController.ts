import express, { Router, Request, Response } from 'express'
class BookController{

    public static getBook = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is book get response")
    }
    
    public static postBook = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is book post response")
    }
    
    public static putBook = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is book put response")
    }
    
    public static deleteBook = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is book delete response")
    }

}

export default BookController;
import express, { Router, Request, Response } from 'express'
class AuthorController{

    public static getAuthor = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is author get response")
    }
    
    public static postAuthor = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is author post response")
    }
    
    public static putAuthor = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is author put response")
    }
    
    public static deleteAuthor = (req: any, res: Response) => {
        const user = req.user;
        res.send("this is author delete response")
    }

}

export default AuthorController;
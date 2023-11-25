import express, { Router , Request, Response} from 'express'
import Book from '../models/book';

class IndexController {
    public static getIndex = async (req:any,res:Response)=>{
        // res.send("this is a response from index");
        res.render('index');
    }

    // public static getIcon = async (req:any,res:Response)=>{
    //     res.sendFile('favicon.ico');
    // }
}

export default IndexController;
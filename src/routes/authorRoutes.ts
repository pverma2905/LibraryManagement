import express,{Router, Request, Response} from 'express'
import AuthorController from '../controllers/authorController';

const router:Router = express.Router();

router.get("/",AuthorController.getAuthor)
router.post("/",AuthorController.postAuthor)
router.put("/:id",AuthorController.putAuthor)
router.delete("/:id",AuthorController.deleteAuthor)

export default router;
import {Router} from 'express';
import { upload } from '../multer';


export const postRouter = Router();

postRouter.post('/image', upload.single("image"), (req, res) => {

  
  

});

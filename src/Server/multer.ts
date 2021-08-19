import multer from "multer";
import path from 'path';

export const upload = multer({
  storage: multer.diskStorage({
    destination: 'tempImages/',
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  })
});


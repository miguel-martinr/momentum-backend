import {Router} from 'express';
import { upload } from '../multer';
import * as fs from 'fs';
export const postRouter = Router();
import QRCode from 'qrcode';
import path from 'path';

postRouter.post('/upload/image', upload.single("image"), (req, res) => {
  console.log(req.body);


  const response: {url: string, qr: string} = {
    url: "",
    qr: ""
  };

  if (req.file && req.body.svBaseUrl && req.body.private && req.body.private !== 'true') {
    const memoryPath = `public/memories/${req.file?.filename}`;
    fs.rename(req.file?.path, memoryPath, (err) => {
      if (err) throw err;
    });

    response.url = path.join(req.body.svBaseUrl, memoryPath.replace('public/', ''));
    const qr =  QRCode.toDataURL(response.url, (err, url) => {
      response.qr = url;
      return res.send(response);
    })
  }
});

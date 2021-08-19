
import express from 'express';
import { corsConfig } from './Cors';
import { postRouter } from './Routers/post';
import path from 'path';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../../public')));
app.use(corsConfig);
app.use(postRouter);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Listenning on ${PORT}`);
})


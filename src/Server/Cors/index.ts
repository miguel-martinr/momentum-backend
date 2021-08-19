import cors from 'cors';
import {whitelist, whitePatterns} from './whitelist.json';

const allowed = [...whitelist, ...whitePatterns];

const opts: cors.CorsOptions = {
  origin: allowed
}

export const corsConfig = cors(opts);
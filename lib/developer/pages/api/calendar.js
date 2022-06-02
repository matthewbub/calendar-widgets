import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import {calendar} from '@whilethiscompiles/calendar';

const cors = initMiddleware(
  Cors({methods: ['GET']})
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  if(req.query.year && req.query.year.length > 0) {
    if(req.query.year.length === 4) {
      return res.json({ data: calendar(req.query.year) })
    } else {
      return res.status(400).json({ error: 'Something went wrong - Invaild length' })
    }
  }
  return res.status(400).json({ error: 'Something went wrong - Invaid query params' }) 
}
import { Request, Response, Router } from 'express';

import convert from 'xml-js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const { xml, options } = req.body;

  const json = JSON.parse(convert.xml2json(xml, options));

  return res.json(json);
});

export { router };

import { Request, Response, Router } from 'express';

import convert from 'xml-js';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  return res.json({ text: 'API ready.' });
});

router.post('/', async (req: Request, res: Response) => {
  const { xml, options } = req.body;

  if (!xml) {
    return res.json({ text: 'Json not provided.' });
  }

  try {
    const json = JSON.parse(convert.xml2json(xml, options));
    return res.json(json);
  } catch (e) {
    return res.json({ text: 'Erro converting XML.' });
  }
});

export { router };

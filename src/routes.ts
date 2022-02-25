import { Request, Response, Router } from 'express';

import convert from 'xml-js';

const router = Router();

const options = {
  compact: true,
  spaces: 2,
  ignoreAttributes: true,
  textKey: 'text',
};

router.get('/', async (req: Request, res: Response) => {
  return res.json({ text: 'API ready.' });
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const json = JSON.parse(convert.xml2json(req.body, options).replace(/(s:|a:)/g, ''));

    return res.json(json);
  } catch (e) {
    return res.json({ text: 'Error converting XML.' });
  }
});

export { router };

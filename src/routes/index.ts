import * as express from 'express';
import * as secret from '../secret/weibo';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render(
    'index',
    {
      title: 'Express',
      client_id: secret.client_id,
      redirect_uri: secret.redirect_uri,
    },
  );
});

export default router;

import { Router } from 'express';
import { UrlController } from '../controllers/url.controller.js';

export function createUrlRoutes(urlController: UrlController): Router {
  const router = Router();

  router.post('/api/shorten', (req, res) => {
    void urlController.shorten(req, res);
  });

  router.get('/:code', (req, res) => {
    void urlController.redirect(req, res);
  });

  return router;
}
